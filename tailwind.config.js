module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        galaxy: ["SF Distant Galaxy", "regular"],
      },
      backgroundImage: {
        "star-wars": "url('/src/components/assets/star-wars-2.jpg')",
      },
    },
  },
  plugins: [],
};
