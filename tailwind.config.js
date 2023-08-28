/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url(https://www.tracker.co.uk/application/files/1315/4867/2671/caravan-banner.jpg)",
        'caravan' : 'url(https://ucaravan.com.tr/images/background/3.jpg)',
      },
    },
  },
  plugins: [],
}