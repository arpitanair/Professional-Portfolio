import { motion, useReducedMotion } from "motion/react";

export function RuleReveal({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-x-0 top-0 h-px origin-left bg-line/60 ${className}`}
    />
  );
}
