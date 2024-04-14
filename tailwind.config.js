/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4458dc',
        'custom-purple': '#854fee',
      },
      gradientColorStops: {
        'custom-blue': '#4458dc',
        'custom-purple': '#854fee',
      },
    },
  },
  plugins: [],
}

