/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 72%, 30%)", // darker for higher contrast with white text
        "dark-cyan": "hsl(183, 90%, 12%)", // darker for high contrast in dark mode
        "grayish-cyan": "hsl(184, 12%, 34%)", // darker for readable headings on light bg
        "light-grayish-cyan": "hsl(185, 36%, 82%)", // improve contrast against white
        "light-cyan": "hsl(189, 50%, 96%)", // keep near-white but slightly toned
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
