/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000E2F",
        primary: "#0C2292",
        secondary: "#359EFF",
        danger: "#E00D00",
        success: "#25DF6C",
        "black-blue":"#0E044B",
        "light-blue":"#2C309B",
        
      },
    },
  },
  plugins: [],
};
