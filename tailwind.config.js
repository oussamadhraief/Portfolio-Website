module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 16px 5px rgba(125,125,125,0.8)',
      },
      screens: {
        '3xl': '1696px',
      },
    },
  },
  plugins: [],
}
