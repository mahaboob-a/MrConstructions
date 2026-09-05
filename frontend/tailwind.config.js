/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A47",
          700: "#123A61",
          900: "#081A2C",
        },
        bronze: {
          DEFAULT: "#C9982E",
          light: "#E3B85C",
        },
        stone: {
          50: "#F7F5F1",
          200: "#E7E3DA",
          600: "#5B6570",
          800: "#33383D",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
