/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "weather-third": "#D6E5E3",
      },
    },
    fontFamily: {
      "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "680px",
      md: "768px",
    },
  },
  plugins: [],
};
