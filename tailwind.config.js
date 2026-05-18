/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', "monospace"],
			},
			height: {
				70: "17.5rem",
			},
		},
	},
};
