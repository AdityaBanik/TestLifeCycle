/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      minHeight: {
        'screen': 'calc(100vh - 90px)',
      }
			
		},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    }
	},
	plugins: []
};
