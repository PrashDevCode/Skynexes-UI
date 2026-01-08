/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#38BDF8",
        accent: "#22D3EE",
      },
    },
  },
  plugins: [],
};
