module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ash":"#51493D",
        "dark":"#0F0F0E",
        "black":"#252820",
        "green":"#668C3A"
      },
      fontFamily: {
        "syne":['Syne'],
        'agrandir':['Agrandir'],
        "inter":['Inter']
      }
    },
  },
  plugins: [],
}