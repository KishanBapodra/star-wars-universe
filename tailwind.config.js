module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        galaxy: ["SF Distant Galaxy", "regular"],
      },
      backgroundImage: {
        "star-wars-1": "url('/src/components/assets/star-wars-1.jpg')",
        "star-wars-2": "url('/src/components/assets/star-wars-2.jpg')",
        "star-wars-3": "url('/src/components/assets/star-wars-3.jpg')",
        "star-wars-4": "url('/src/components/assets/star-wars-4.jpg')",
      },
    },
  },
  plugins: [],
};
