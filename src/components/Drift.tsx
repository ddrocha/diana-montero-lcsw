import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type DriftProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
  rotate?: number;
};

/**
 * Wraps a small decorative mark (sparkle, dot, blob) in a slow, continuous
 * float + rotate loop so the background feels gently alive rather than static.
 * className carries positioning/size; duration/delay/y/rotate vary per
 * instance so marks don't all drift in lockstep.
 */
export function Drift({ children, className, duration = 6, delay = 0, y = 6, rotate = 6 }: DriftProps) {
  return (
    <motion.span
      className={className}
      animate={{ y: [0, -y, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.span>
  );
}
