import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			serif: ['Myra', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: ['"JetBrains Mono"', 'monospace']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			background: {
				0: '#141414',
				1: '#1D1D1D',
				2: '#1D1D1D',
			},
			text: {
				primary: '#FFFFFF',
				secondary: '#B3B3B3',
				colored: '#45495D'
			},
			stroke: '#232323',
			success: '#78FFD1',
			warning: '#F0FFA6',
			danger: '#FFB3C2',
			information: '#99B9FF',
			colors: {
			},
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.text-important': {
					backgroundColor: theme('colors.danger'),
				}
			})
		}),
	],
}
