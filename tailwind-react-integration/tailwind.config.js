module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan these files for Tailwind classes
  ],
  darkMode: 'media',  // You can set this to 'class' for class-based dark mode
  theme: {
    extend: {},  // You can extend Tailwind's default theme here
  },
  plugins: [],  // Add any plugins you want to use
};
