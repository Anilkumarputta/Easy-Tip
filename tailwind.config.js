/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-purple": "hsl(271, 81%, 56%)", // vibrant purple for buttons
        "dark-purple": "hsl(271, 91%, 12%)", // dark purple for dark mode
        "grayish-purple": "hsl(272, 12%, 34%)", // muted purple-gray
        "light-purple": "hsl(270, 50%, 96%)", // light purple background
        white: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        space: ["Space Mono", "monospace"]
      }
    },
    screens:{
      mb: "375px", /* mobile */
      md: "768px", /* tablets */
      dt: "1010px", /* desktop */
    }
  },
  plugins: [],
}
