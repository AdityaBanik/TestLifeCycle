/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px'
		},
		extend: {
			minHeight: {
				screen: 'calc(100vh - 90px)'
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
	plugins: [require('@tailwindcss/typography')]
};
