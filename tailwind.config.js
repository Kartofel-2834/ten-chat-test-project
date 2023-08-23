/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        heading: "2.5rem",
        input: "1.125rem",
      },

      backgroundImage: {
        "auth-circle-a":
          "linear-gradient(163deg, rgba(68, 76, 231, 0.16) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%)",
        "auth-circle-b":
          "linear-gradient(174deg, rgba(164, 188, 253, 0.2) 0%, rgba(68, 76, 231, 0.16) 100%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%)",
      },

      colors: {
        primary: "#6172F3",
        secondary: "#8098F9",
        "primary-text": "#E0EAFF",
        "subtitle-text": "#71717A",
        "base-text": "#09090B",
      },
    },
  },
};
