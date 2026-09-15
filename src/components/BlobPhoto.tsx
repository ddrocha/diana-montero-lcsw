type BlobPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

const BLOB_PATH =
  'M200,18 C266,12 330,42 358,96 C390,158 392,228 372,292 C354,352 320,404 262,436 C202,470 128,468 78,428 C30,390 12,322 20,256 C28,188 56,116 106,76 C138,50 166,23 200,18 Z';

/**
 * Frames a photo in a hand-drawn organic blob instead of a rectangle or
 * circle crop, with a bold swoosh accent overlapping the frame edge.
 */
export function BlobPhoto({ src, alt, className }: BlobPhotoProps) {
  return (
    <svg viewBox="0 0 400 500" className={className} role="img" aria-label={alt}>
      <defs>
        <clipPath id="photoBlob" clipPathUnits="userSpaceOnUse">
          <path d={BLOB_PATH} />
        </clipPath>
      </defs>

      <path d={BLOB_PATH} className="fill-sage-300" transform="translate(12 14)" opacity="0.55" />

      <image href={src} width="400" height="500" preserveAspectRatio="xMidYMid slice" clipPath="url(#photoBlob)" />

      <path d={BLOB_PATH} fill="none" stroke="currentColor" strokeWidth="3" className="text-terracotta-500" />

      {/* bold swoosh accent growing out from the lower-left edge */}
      <path
        d="M50,398c-30,10-46,36-40,64c3,14,14,22,28,20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        className="text-terracotta-500"
      />
    </svg>
  );
}
