module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#c615ed',
      },
      boxShadow: {
        '3xl': '0px 1px 24px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
}