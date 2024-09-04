/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			serif: ['Myra', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: ['"JetBrains Mono"', 'monospace']
		},
		extend: {},
	},
	plugins: [],
}
