from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import logging
from pathlib import Path


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
from lib.db import client, db


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    client.close()


app = FastAPI(lifespan=lifespan)

api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def health():
    return {"status": "ok"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
