/**
 * Spacing scale (maps to Tailwind default spacing).
 * Use Tailwind classes: p-0, p-0.5, p-1, p-2, p-3, p-4, p-5, p-6, etc.
 */
export const SPACING = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const;

/**
 * Border radius tokens.
 * Use Tailwind classes: rounded-none, rounded-xs, rounded-sm, rounded-md, rounded-lg, etc.
 */
export const BORDER_RADIUS = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '50px',
} as const;

/**
 * Extended width tokens for layout.
 * Use Tailwind classes: w-21, w-31, w-73, w-163, w-180, w-200, w-248, w-260, w-333, w-360.
 */
export const WIDTH = {
  21: '84px',
  31: '124px',
  73: '292px',
  163: '652px',
  180: '720px',
  200: '800px',
  248: '992px',
  260: '1040px',
  333: '1332px',
  360: '1440px',
} as const;
