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
        "light-green": {
          100: "#f2faf4",
          200: "#e7f6ec",
        },
        "light-purple": {
          100: "#f5f5ff",
          200: "#e2e2ff",
        },
      },
      maxWidth: {
        auto: "1440px",
      },
      screens: {
        "lg-laptop": "1440px",
      },
    },
  },
  plugins: [],
};
