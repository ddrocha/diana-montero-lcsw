/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCF7EE',
          100: '#F6EBD9',
          200: '#EFDFC3',
        },
        sage: {
          100: '#EAEFE3',
          200: '#DCE4D3',
          300: '#C2D0B5',
          400: '#9EB18C',
          500: '#7C9068',
          600: '#5F7350',
          700: '#485838',
          800: '#39452C',
          900: '#28311F',
        },
        lavender: {
          200: '#E8DCE9',
          300: '#D6C0DA',
          400: '#BFA0C7',
          500: '#A480AE',
        },
        terracotta: {
          400: '#DB8E5C',
          500: '#C97441',
          600: '#AD5C2E',
          700: '#8C4823',
        },
        butter: {
          200: '#F7E9BE',
          300: '#F0D98C',
          400: '#E3C15A',
          500: '#C9A233',
          700: '#7A5D1D',
        },
        ink: {
          700: '#544537',
          800: '#3E3226',
          900: '#2B221A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        measure: '70ch',
      },
      boxShadow: {
        soft: '0 18px 40px -20px rgba(43, 34, 26, 0.35)',
        card: '0 10px 30px -12px rgba(43, 34, 26, 0.25)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
