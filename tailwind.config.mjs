/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				space: ['Space Mono'],
			},
			gridTemplateColumns: {
				'projects': 'repeat(auto-fit, minmax(200px, 1fr))',
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
			keyframes: {
				'border-radius-animation': {
					'0%, 100%': {
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
					},
					'50%': {
						borderRadius: '63% 37% 33% 67% / 30% 53% 47% 70%'
					},
				},
				'clip-path-animation': {
					'0%, 100%': {
						clipPath: '30% 70% 70% 30% / 30% 30% 70% 70%'
					},
					'50%': {
						clipPath: '63% 37% 33% 67% / 30% 53% 47% 70%'
					},
				}
			},
			animation: {
				'border-radius': 'border-radius-animation 5s ease-in-out infinite alternate',
				'clip-path': 'clip-path-animation 5s ease-in-out infinite alternate',
			},
		},
	},
	plugins: [],
}
