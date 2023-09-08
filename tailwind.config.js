/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-green": "#319B72",
        "c-green-dark": "#2a7c5d",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s linear infinite",
        "left-right": "left-right 4s linear infinite",
      },
      keyframes: {
        "left-right": {
          "0%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(15px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(-15px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
