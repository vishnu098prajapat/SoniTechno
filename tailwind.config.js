/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* pulled from the SoniTechno logo: red #E62E2E on black */
        brand: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#fb6565',
          500: '#e62e2e',
          600: '#d11f1f',
          700: '#af1717',
          800: '#911818',
          900: '#791a1a',
          950: '#420808',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e7e7ea',
          200: '#c9c9d0',
          300: '#a1a1ac',
          400: '#74747f',
          500: '#5a5a64',
          600: '#494951',
          700: '#3d3d44',
          800: '#141417',
          900: '#0d0d10',
          950: '#0a0a0c',
        },
        sand: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dd',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,12,.04), 0 12px 40px -16px rgba(10,10,12,.14)',
        lift: '0 20px 60px -24px rgba(10,10,12,.35)',
        red: '0 18px 44px -18px rgba(230,46,46,.65)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulseRing: { '0%': { transform: 'scale(.9)', opacity: .7 }, '100%': { transform: 'scale(1.6)', opacity: 0 } },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        fadeUp: 'fadeUp .7s cubic-bezier(.2,.7,.2,1) both',
        marquee: 'marquee 32s linear infinite',
        pulseRing: 'pulseRing 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
