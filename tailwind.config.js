/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display-lg': ['Sora', 'sans-serif'],
        'body-sm': ['Space Grotesk', 'sans-serif'],
        'hud-label': ['JetBrains Mono', 'monospace'],
        'button-text': ['Sora', 'sans-serif'],
        'display-lg-mobile': ['Sora', 'sans-serif'],
        'headline-md': ['Sora', 'sans-serif'],
      },
      fontSize: {
        'button-text': ['16px', { lineHeight: '24px', fontWeight: '600' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        gutter: '12px',
        unit: '4px',
        'margin-mobile': '16px',
        'margin-desktop': '32px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
};
