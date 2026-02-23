/**
 * Semantic color tokens (HSL values).
 * Use Tailwind classes from tailwind.config theme.extend.colors.
 */
export const COLORS = {
  border: {
    primary: '0 0% 90%',
    secondary: '0 0% 85%',
    tertiary: '0 0% 80%',
  },
  background: {
    primary: '0 0% 100%',
    secondary: '0 0% 98%',
    tertiary: '0 0% 96%',
    brand: '220 70% 50%',
  },
  text: {
    primary: '0 0% 10%',
    secondary: '0 0% 35%',
    tertiary: '0 0% 50%',
    brand: '220 70% 45%',
    'alerts-error': '0 70% 45%',
    danger: '0 70% 50%',
  },
  icon: {
    primary: '0 0% 20%',
    secondary: '0 0% 45%',
  },
  focusRing: {
    primary: '220 70% 50%',
  },
} as const;
