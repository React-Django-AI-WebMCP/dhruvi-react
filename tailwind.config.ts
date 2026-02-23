import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: {
          primary: 'hsl(var(--border-primary))',
          secondary: 'hsl(var(--border-secondary))',
          tertiary: 'hsl(var(--border-tertiary))',
        },
        background: {
          primary: 'hsl(var(--background-primary))',
          secondary: 'hsl(var(--background-secondary))',
          tertiary: 'hsl(var(--background-tertiary))',
          brand: 'hsl(var(--background-brand))',
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
          brand: 'hsl(var(--text-brand))',
          'alerts-error': 'hsl(var(--text-alerts-error))',
          danger: 'hsl(var(--text-danger))',
        },
        icon: {
          primary: 'hsl(var(--icon-primary))',
          secondary: 'hsl(var(--icon-secondary))',
        },
        focusRing: {
          primary: 'hsl(var(--focus-ring-primary))',
        },
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '50px',
      },
      boxShadow: {
        elevation100: 'var(--shadow-elevation100)',
        elevation200: 'var(--shadow-elevation200)',
        elevation300: 'var(--shadow-elevation300)',
        elevation400: 'var(--shadow-elevation400)',
        elevation500: 'var(--shadow-elevation500)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        t1_heading1: ['var(--t1-size)', { lineHeight: 'var(--t1-line-height)' }],
        t2_heading2: ['var(--t2-size)', { lineHeight: 'var(--t2-line-height)' }],
        t3_sub_heading_1: ['var(--t3-size)', { lineHeight: 'var(--t3-line-height)' }],
        t4_sub_heading_2: ['var(--t4-size)', { lineHeight: 'var(--t4-line-height)' }],
        t5_sub_heading_3: ['var(--t5-size)', { lineHeight: 'var(--t5-line-height)' }],
        t6_section_title_1: ['var(--t6-size)', { lineHeight: 'var(--t6-line-height)' }],
        t7_section_title_2: ['var(--t7-size)', { lineHeight: 'var(--t7-line-height)' }],
        t8_section_content: ['var(--t8-size)', { lineHeight: 'var(--t8-line-height)' }],
        t9_section_content_small: ['var(--t9-size)', { lineHeight: 'var(--t9-line-height)' }],
        t10_body_2: ['var(--t10-size)', { lineHeight: 'var(--t10-line-height)' }],
        t11_body_3: ['var(--t11-size)', { lineHeight: 'var(--t11-line-height)' }],
        t12_body_4: ['var(--t12-size)', { lineHeight: 'var(--t12-line-height)' }],
        t13_body_4: ['var(--t13-size)', { lineHeight: 'var(--t13-line-height)' }],
        t14_caption: ['var(--t14-size)', { lineHeight: 'var(--t14-line-height)' }],
        t15_caption_small: ['var(--t15-size)', { lineHeight: 'var(--t15-line-height)' }],
        t16_label: ['var(--t16-size)', { lineHeight: 'var(--t16-line-height)' }],
        t17_label_small: ['var(--t17-size)', { lineHeight: 'var(--t17-line-height)' }],
        t18_avatar_xs: ['var(--t18-size)', { lineHeight: 'var(--t18-line-height)' }],
        t19_avatar_sm: ['var(--t19-size)', { lineHeight: 'var(--t19-line-height)' }],
      },
      width: {
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
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
