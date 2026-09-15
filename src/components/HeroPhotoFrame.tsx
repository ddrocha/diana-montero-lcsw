type HeroPhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

const FRAME_PATH =
  'M140,0 L372,0 A28,28 0 0 1 400,28 L400,410 A90,90 0 0 1 310,500 L28,500 A28,28 0 0 1 30,472 L30,140 A140,140 0 0 1 140,0 Z';

/**
 * Frames a photo in a soft asymmetric rectangle — a sweeping oversized
 * radius on one corner instead of a uniform rounded rect — with a bold
 * swoosh accent drawn overlapping the frame edge. The hero's sibling to the
 * About section's full organic blob: related hand-drawn language, distinct shape.
 */
export function HeroPhotoFrame({ src, alt, className }: HeroPhotoFrameProps) {
  return (
    <svg viewBox="0 0 400 500" className={className} role="img" aria-label={alt}>
      <defs>
        <clipPath id="heroPhotoFrame" clipPathUnits="userSpaceOnUse">
          <path d={FRAME_PATH} />
        </clipPath>
      </defs>

      <path d={FRAME_PATH} className="fill-lavender-200" opacity="0.6" transform="translate(12 14)" />

      <image href={src} width="400" height="500" preserveAspectRatio="xMidYMid slice" clipPath="url(#heroPhotoFrame)" />

      <path d={FRAME_PATH} fill="none" stroke="currentColor" strokeWidth="3" className="text-terracotta-500" />

      {/* bold swoosh accent growing out from the left edge, clear of the floating badges */}
      <path
        d="M30,258c-16,6-26,20-24,38c1,10,8,16,18,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        className="text-sage-600"
      />
    </svg>
  );
}
