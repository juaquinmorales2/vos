/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["src/components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
        aurora: "aurora 60s linear infinite",
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
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
