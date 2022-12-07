module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-green': '#3B951C',
        'brand-yellow': '#DEBB04',
        'brand-violet': '#7C063F',
        'dark-green': '#016648',
        'brand-black': '#333333',
        'opacity-06': 'rgba(33, 107, 7, 0.6)',
        'cyan-01': 'rgba(0, 240, 255, 0.02)',
        'cyan-02': 'rgba(1, 102, 72, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
