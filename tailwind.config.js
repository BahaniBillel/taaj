/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    colors: {
      transparent: "transparent",
      darkGray: "#202729",
      greenPrimary: "#4ba173",
      greenSecondary: "#63d297",
      white: "#ffffff",
      lightGray: "#e5e7eb",
      lightEmerald: "#ecfdf5",
      red: "#dc2626",
      // beige: "#fbd1a2",
      // blackgrey: "#1f2937",
      // gray: "#9ca3af",
      // bluegreen: "#0d98ba",
      // lightOrange: "#fff7ed",
    },
  },
};
