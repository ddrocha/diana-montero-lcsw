import { motion } from 'framer-motion';

type IconProps = {
  className?: string;
};

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** A single curling leaf — stands in for "individual." */
export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 27C9 24 6 17 8 9c8-2 15 1 18 8 2 7-2 13-10 10Z" />
      <path d="M9 10c6 3 9 9 8 16" />
    </svg>
  );
}

/** Two leaves crossing at the stem — stands in for "couples." */
export function TwoLeavesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 28c-5-3-9-8-8-15 5-3 11-2 14 3 2 5 0 10-6 12Z" />
      <path d="M16 28c5-3 9-8 8-15-5-3-11-2-14 3-2 5 0 10 6 12Z" opacity="0.55" />
      <path d="M16 13v15" />
    </svg>
  );
}

/** A small three-leaf sprig — stands in for "family." */
export function SprigIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 28V13" />
      <path d="M16 17c-4-1-7-4-7-9 5 0 8 3 9 7" />
      <path d="M16 14c4-1 7-4 7-9-5 0-8 3-9 7" />
      <path d="M16 22c-3-1-5-3-5-6 4 0 6 2 7 5" opacity="0.6" />
    </svg>
  );
}

/** A speech-leaf hybrid — stands in for languages. */
export function LanguageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M6 9c0-2 2-3 4-3h12c2 0 4 1 4 3v9c0 2-2 3-4 3H14l-5 5v-5H10c-2 0-4-1-4-3Z" />
      <path d="M11 14c1-3 3-4 5-4s4 1 5 4" opacity="0.6" />
    </svg>
  );
}

/** A hand-drawn checkmark bloom — used for trust pills. */
export function BloomCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

/** A single sprout — used as a scroll cue / small accent. */
export function SproutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21V11" />
      <path d="M12 14c-3-.5-5-2.5-5-6 4 0 6 2 6.5 5" />
      <path d="M12 11c3-.5 5-2.5 5-6-4 0-6 2-6.5 5" />
    </svg>
  );
}

/** A hand-drawn four-point sparkle — small whimsical accent, scattered decoratively. */
export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 1c.6 4.7 1.6 7.4 3.3 9.1 1.7 1.7 4.4 2.7 9.1 3.3-4.7.6-7.4 1.6-9.1 3.3-1.7 1.7-2.7 4.4-3.3 9.1-.6-4.7-1.6-7.4-3.3-9.1-1.7-1.7-4.4-2.7-9.1-3.3 4.7-.6 7.4-1.6 9.1-3.3C10.4 8.4 11.4 5.7 12 1Z" />
    </svg>
  );
}

/** A small filled dot — the smallest annotation mark, used singly or in clusters. */
export function DotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

/** A loose hand-drawn squiggle — a doodled underline/connector accent. */
export function SquiggleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 16" className={className} {...base}>
      <path d="M2 11c4-8 8-8 11 0s7 8 11 0 7-8 11 0 7 8 11 0 6-6 8-4" />
    </svg>
  );
}

/** A small solid triangle — the connector "pointer" on annotation tags. */
export function TrianglePointer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M1 2 L15 6 L4 15 Z" />
    </svg>
  );
}

/** A little seated figure, hands resting in its lap — a calm/grounded accent. Breathes slowly in place. */
export function FigureRestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 40" className={className} {...base}>
      <motion.g
        style={{ transformOrigin: '16px 20px' }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="16" cy="8" r="5" />
        <path d="M11 13c-3 4-4 11-2 17 2 4 12 4 14 0 2-6 1-13-2-17-2 2-8 2-10 0Z" />
        <path d="M13 22c1 3 5 3 6 0" opacity="0.7" />
      </motion.g>
    </svg>
  );
}

/** A little standing figure with one arm raised — a friendly, welcoming accent. The arm actually waves. */
export function FigureWaveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 40" className={className} {...base}>
      <circle cx="15" cy="7" r="5" />
      <path d="M11 15c-2 7-2 15 0 22h8c2-7 2-15 0-22-2 2-6 2-8 0Z" />
      <motion.path
        d="M18 16c4-3 7-6 8-12"
        style={{ transformOrigin: '18px 16px' }}
        animate={{ rotate: [0, 14, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <path d="M13 18c-3 2-4 5-4 9" opacity="0.7" />
    </svg>
  );
}

/** Two small figures close together, one hand touching — stands in for couples/family. Each sways on its own gentle rhythm. */
export function FigureDuoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <motion.g opacity="0.55" animate={{ y: [0, -1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="11" cy="10" r="4" />
        <path d="M8 15c-2 5-2 11 0 17h6c2-6 2-12 0-17-1.5 1.5-4.5 1.5-6 0Z" />
      </motion.g>
      <motion.g animate={{ y: [0, -1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
        <circle cx="26" cy="11" r="4.5" />
        <path d="M22 17c-2.5 6-2.5 13 0 20h8c2.5-7 2.5-14 0-20-2 1.5-6 1.5-8 0Z" />
      </motion.g>
      <path d="M15 27c2 1 4 1 6-.5" opacity="0.7" />
    </svg>
  );
}

/** A little figure with both hands cupped near its mouth, calling out — stands in for reaching out to connect. Small voice ripples pulse outward. */
export function FigureCallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 40" className={className} {...base}>
      <circle cx="15" cy="7" r="5" />
      <path d="M11 15c-2 7-2 15 0 22h8c2-7 2-15 0-22-2 2-6 2-8 0Z" />
      <path d="M12 16c-1 3 0 6 2 7" />
      <path d="M18 16c1 3 0 6-2 7" />
      <path d="M13 18c-3 2-4 5-4 9" opacity="0.7" />
      <motion.path
        d="M21 5c2 1 3 3 2 6"
        style={{ transformOrigin: '20px 8px' }}
        animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.path
        d="M23 3c3 2 4 6 2 10"
        style={{ transformOrigin: '22px 8px' }}
        animate={{ opacity: [0.35, 0, 0.35], scale: [1, 1.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  );
}

/** A little figure mid-stride, arms swinging — stands in for taking the first step. Legs and arms actually cycle. */
export function FigureStepIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 36 40" className={className} {...base}>
      <circle cx="14" cy="7" r="5" />
      <path d="M14 13c1 4 2 7 3 11" />
      <motion.path
        d="M17 24c-1 4-4 7-7 11"
        style={{ transformOrigin: '17px 24px' }}
        animate={{ rotate: [0, -7, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M17 24c3 3 8 5 12 7"
        style={{ transformOrigin: '17px 24px' }}
        animate={{ rotate: [0, 7, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M14 15c-3 2-5 5-5 9"
        opacity="0.7"
        style={{ transformOrigin: '14px 15px' }}
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      />
      <motion.path
        d="M16 15c3 1 5 3 6 5"
        opacity="0.7"
        style={{ transformOrigin: '16px 15px' }}
        animate={{ rotate: [0, -6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      />
    </svg>
  );
}

/** A little figure with both arms raised in a cheer — a warm, welcoming accent. Arms sway alternately. */
export function FigureCheerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 40" className={className} {...base}>
      <circle cx="16" cy="8" r="5" />
      <path d="M12 15c-2 6-2 13 0 19h8c2-6 2-13 0-19-2 2-6 2-8 0Z" />
      <motion.path
        d="M12 16c-3-4-4-8-3-13"
        style={{ transformOrigin: '12px 16px' }}
        animate={{ rotate: [-4, 6, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M20 16c3-4 4-8 3-13"
        style={{ transformOrigin: '20px 16px' }}
        animate={{ rotate: [4, -6, 4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <path d="M14 25c-1 3-2 6-2 9" opacity="0.7" />
    </svg>
  );
}

/** A little figure with a hand at its chin, head tilted — a thoughtful, reflective accent. The head sways slowly. */
export function FigureThinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 40" className={className} {...base}>
      <path d="M12 15c-2 6-2 13 0 19h8c2-6 2-13 0-19-2 2-6 2-8 0Z" />
      <path d="M13 17c-2 2-3 5-2 8" opacity="0.7" />
      <motion.g
        style={{ transformOrigin: '16px 10px' }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="16" cy="8" r="5" />
        <path d="M19 16c1 2 0 5-2 6" />
      </motion.g>
    </svg>
  );
}
