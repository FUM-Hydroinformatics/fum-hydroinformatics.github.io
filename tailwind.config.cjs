/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa'
			},
			fontFamily: {
				body: ['Vazirmatn-RD', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
}
