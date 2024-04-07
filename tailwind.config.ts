/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: "#CCC2DC",
      "bg-1": "#141218",
      "bg-2": "#211F26",

      "text-1": "#E6E0E9",

      "gray-1": "#303030",

      stroke: "#4A4458",
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 0.6,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
  plugins: [],
};
