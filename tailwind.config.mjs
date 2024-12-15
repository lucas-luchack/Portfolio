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
		backgroundImage: {
			'background-pattern': "linear-gradient( to bottom, hsla(158, 23%, 18%, 0) 0%, hsla(158, 23%, 18%, .013) 9.7%, hsla(158, 23%, 18%, .049) 18.1%, hsla(158, 23%, 18%, .104) 25.5%, hsla(158, 23%, 18%, .175) 31.9%, hsla(158, 23%, 18%, .259) 37.7%, hsla(158, 23%, 18%, .352) 43%, hsla(158, 23%, 18%, .45) 47.9%, hsla(158, 23%, 18%, .55) 52.8%, hsla(158, 23%, 18%, .648) 57.7%, hsla(158, 23%, 18%, .741) 63%, hsla(158, 23%, 18%, .825) 68.7%, hsla(158, 23%, 18%, .896) 75%, hsla(158, 23%, 18%, .951) 82.2%, hsla(158, 23%, 18%, .987) 90.5%, hsl(158, 23%, 18%) 100% )",
			'main-pattern-darken': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/neon-background-compressed.jpg')",
			'main-pattern-lighten': "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('/assets/images/neon-background-compressed.jpg')",
		},
		extend: {
			borderRadius: {
				'card': '64px'
			},
		},
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
