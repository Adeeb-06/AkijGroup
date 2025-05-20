/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    extend: {
      colors: {
        'olive': {
          800: '#4D5D2A',  // The dark green color from the design
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        'w-4': 4,
        'h-5': 5,
      },
    },
  },
  plugins: [],
}
