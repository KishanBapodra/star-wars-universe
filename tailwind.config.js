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
        "star-wars-5": "url('/src/components/assets/star-wars-5.jpg')",
        "star-wars-6": "url('/src/components/assets/star-wars-6.jpg')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        '3xl': '1650px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
