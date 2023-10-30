module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        storeTheme: {
          primary: "#22c55e",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
      "cupcake",
      "forest",
    ],
  },
  
};
