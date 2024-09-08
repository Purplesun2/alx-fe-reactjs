module.exports = {
  content: [
    "./index.html",        // Ensures Tailwind scans index.html
    "./src/**/*.{js,jsx}"  // Ensures Tailwind scans all files in src
  ],
  darkMode: 'media',  // or 'class' if you want class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
