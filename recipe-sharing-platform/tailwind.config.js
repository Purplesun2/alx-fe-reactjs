module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // Purge unused CSS in production
  darkMode: false,  // You can also change this to 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
