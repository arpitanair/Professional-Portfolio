"""Security audit verification (SEC-001 removed /api/status, SEC-002 CORS hardening).

Tests run against the PUBLIC preview URL so we validate what the user/ingress sees.
"""

import os

import httpx
import pytest

PUBLIC_URL = os.environ.get("preview_endpoint") or os.environ.get("PREVIEW_ENDPOINT")
if not PUBLIC_URL:
    raise RuntimeError("preview_endpoint env var missing")
PUBLIC_URL = PUBLIC_URL.rstrip("/")
API = f"{PUBLIC_URL}/api"
ORIGIN = "https://evil.example.com"


@pytest.fixture(scope="module")
def pub():
    with httpx.Client(timeout=30.0, follow_redirects=False) as c:
        yield c


# --- SEC-001: /api/status endpoints removed ---
class TestStatusEndpointRemoved:
    def test_post_status_404(self, pub):
        r = pub.post(f"{API}/status", json={"client_name": "TEST_sec"})
        assert r.status_code == 404, f"expected 404, got {r.status_code}: {r.text[:300]}"

    def test_get_status_404(self, pub):
        r = pub.get(f"{API}/status")
        assert r.status_code == 404, f"expected 404, got {r.status_code}: {r.text[:300]}"
        # must not leak any stored documents
        body = r.text
        assert "client_name" not in body

    def test_put_delete_status_not_available(self, pub):
        for method in ("PUT", "DELETE", "PATCH"):
            r = pub.request(method, f"{API}/status")
            assert r.status_code in (404, 405), f"{method} -> {r.status_code}"


# --- Health endpoint retained ---
class TestHealth:
    def test_health_ok(self, pub):
        r = pub.get(f"{API}/")
        assert r.status_code == 200, f"{r.status_code}: {r.text[:300]}"
        assert r.json() == {"status": "ok"}

    def test_health_no_trailing_slash(self, pub):
        r = pub.get(f"{API}", follow_redirects=True)
        assert r.status_code == 200
        assert r.json() == {"status": "ok"}


# --- SEC-002: CORS hardening ---
class TestCORS:
    def test_simple_get_no_allow_credentials(self, pub):
        r = pub.get(f"{API}/", headers={"Origin": ORIGIN})
        assert r.status_code == 200
        headers = {k.lower(): v for k, v in r.headers.items()}
        assert "access-control-allow-credentials" not in headers, headers.get(
            "access-control-allow-credentials"
        )

    def test_public_preflight_get_no_credentials(self, pub):
        r = pub.request(
            "OPTIONS",
            f"{API}/",
            headers={"Origin": ORIGIN, "Access-Control-Request-Method": "GET"},
        )
        headers = {k.lower(): v for k, v in r.headers.items()}
        assert r.status_code in (200, 204)
        assert "access-control-allow-credentials" not in headers
        assert "GET" in headers.get("access-control-allow-methods", "")


# --- SEC-002 at the application layer (edge proxy rewrites CORS headers on the
# public URL, so allow_methods=["GET"] can only be asserted against uvicorn) ---
class TestCORSAppLayer:
    LOCAL = os.environ.get("BACKEND_URL", "http://localhost:8001") + "/api"

    @pytest.mark.parametrize("method", ["POST", "PUT", "DELETE", "PATCH"])
    def test_preflight_mutating_methods_disallowed(self, method):
        with httpx.Client(timeout=15.0) as c:
            r = c.request(
                "OPTIONS",
                f"{self.LOCAL}/",
                headers={"Origin": ORIGIN, "Access-Control-Request-Method": method},
            )
        headers = {k.lower(): v for k, v in r.headers.items()}
        assert r.status_code == 400, f"{method} preflight not rejected: {r.status_code}"
        assert method not in headers.get("access-control-allow-methods", "")
        assert "access-control-allow-credentials" not in headers

    def test_preflight_get_allowed(self):
        with httpx.Client(timeout=15.0) as c:
            r = c.request(
                "OPTIONS",
                f"{self.LOCAL}/",
                headers={"Origin": ORIGIN, "Access-Control-Request-Method": "GET"},
            )
        headers = {k.lower(): v for k, v in r.headers.items()}
        assert r.status_code == 200
        assert headers.get("access-control-allow-methods") == "GET"
        assert "access-control-allow-credentials" not in headers
