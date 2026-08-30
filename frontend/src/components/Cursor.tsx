import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 450, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!(e.target as HTMLElement).closest?.("a, button"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled || reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      data-testid="custom-cursor"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[90]"
    >
      <motion.span
        animate={{ scale: hot ? 2 : 1, opacity: hot ? 1 : 0.55 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cobalt-soft/80"
      />
    </motion.div>
  );
}
