module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': {transform: 'rotate(360deg)'},
        },
        intro: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
        logo: {
          '0%': { display: 'block', width: '18em', transform: 'scale(2.75)', opacity: '1' },
          '50%': {opacity: '1', width: '18em'},
          '100%': { opacity: '0', transform: 'scale(0.01)', width: '18em', display: 'none' },
        },
        scroll: {
          '0%': { top: '100%' },
          '100%': { top: '-170%' },
        },
      }
    },
  },
  plugins: [],
}
