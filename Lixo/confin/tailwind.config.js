module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },

      backgroundColor: {
        roxo: "#150019",
        cor: "#3e0748",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
