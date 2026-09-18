/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F1E5',
        beige: '#EDE1CE',
        terracotta: '#C95732',
        'terracotta-dark': '#A8452A',
        forest: '#123F35',
        'forest-light': '#1B5747',
        brown: '#3B2118',
        gold: '#C9923E',
      },
      fontFamily: {
        display: ['var(--font-fraunces)'],
        body: ['var(--font-work-sans)'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
