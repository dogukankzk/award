// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["general", "sans-serif"],
        circular: ["circular-web", "sans-serif"],
        robert: ["robert-regular", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        zentry: ["Zentry", "sans-serif"], // si utilisée
      },
    },
  },
  plugins: [],
};
