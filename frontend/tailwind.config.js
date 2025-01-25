/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        xm: '425px',
        xxl: '1800px'
      },
    },
  },
  plugins: [],
}

