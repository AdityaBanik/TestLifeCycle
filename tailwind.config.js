/** @type {import('tailwindcss').Config} */
export default {

theme: {
    extend: {
      minHeight: {
        'screen': 'calc(100vh - 90px)',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '3rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
   
  ],
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ]
};
