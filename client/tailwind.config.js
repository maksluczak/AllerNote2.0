/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          500: "#2ffcd5",
        },
        eden: {
          700: "#306A5F",
          500: "#58877E",
        },
        eclipse: {
          800: "#383838",
          600: "#515151",
        },
        bittersweet: {
          500: "#ff6060",
        },
        salmon: {
          500: "#ff7b7b",
        },
        white: "#f8f8f8",
      },
      keyframes: {
        "dandelion-left": {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        "dandelion-right": {
          "0%": { transform: "rotate(29deg)" },
          "50%": { transform: "rotate(33deg)" },
          "100%": { transform: "rotate(29deg)" },
        },
        "404-jump": {
          "0%": { transform: "translateY(0px)" },
          "2%": { transform: "translateY(-10px)" },
          "4%": { transform: "translateY(0px)" },
          "0%": { transform: "translateY(0px)" },
        },
        "dandelion-1": {
          // 9
          "0%": { transform: "rotate(-19deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(-19deg)" },
        },
        "dandelion-2": {
          //3
          "0%": { transform: "rotate(27deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(27deg)" },
        },
        "dandelion-3": {
          //7
          "0%": { transform: "rotate(-11deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "100%": { transform: "rotate(-11deg)" },
        },
        "dandelion-4": {
          //5
          "0%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(15deg)" },
        },
        "dandelion-5": {
          //8
          "0%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(18deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
