"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds, useful for cascading several Reveals. */
  delay?: number;
  /** Where the element travels in from. Defaults to "up". */
  direction?: Direction;
  className?: string;
  /** Replay every time it enters view. Defaults to false (animate once). */
  repeat?: boolean;
  /** Fraction of the element that must be visible before triggering (0-1). */
  amount?: number;
}

const OFFSET = 28;

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
  none: {},
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  repeat = false,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directionOffset[direction] };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: !repeat, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
