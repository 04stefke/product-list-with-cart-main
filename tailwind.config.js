/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
	theme: {
		extend: {
			colors: {
				red: "hsl(14, 86%, 42%)",
				redDarker: "hsl(14, 86%, 30%)",
				green: "hsl(159, 69%, 38%)",
				rose: {
					50: "hsl(20, 50%, 98%)",
					100: "hsl(13, 31%, 94%)",
					300: "hsl(14, 25%, 72%)",
					400: "hsl(7, 20%, 60%)",
					500: "hsl(12, 20%, 44%)",
					900: "hsl(14, 65%, 9%)",
				},
			},
			fontFamily: {
				sans: ['"Red Hat Text"', "sans-serif"], // Add custom font
			},
			fontSize: {
				body: "16px", // Custom font size for product names
			},
		},
	},
	plugins: [],
};
