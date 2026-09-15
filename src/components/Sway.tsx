import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SwayProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  angle?: number;
};

/**
 * Wraps a short keyword in a slow, continuous rotate-only sway, like a sign
 * swinging gently from a fixed point — no vertical drift, so it stays legible
 * as text while still reading as alive. Pairs with Drift, which is for icons.
 */
export function Sway({ children, className, duration = 4.5, delay = 0, angle = 3 }: SwayProps) {
  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', transformOrigin: 'center bottom' }}
      animate={{ rotate: [-angle, angle, -angle] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.span>
  );
}
