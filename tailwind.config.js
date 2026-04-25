/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        grey: "#e5e9eb",
        lightgray: "#eff2f3",
        "grey-light": "#787878",
        cyan: "#00d4d4",
      },
      borderRadius: {
        section: "2rem",
      },
      spacing: {
        pad: "3.75rem",
      },
    },
  },
  plugins: [],
}
