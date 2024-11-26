/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				ym: {
					red: "#db4437", // Colore primario
					blue: "#2563eb", // Colore secondario
					beige: "#fdf4e3", // Sfondo alternativo
					gray: {
						light: "#e5e7eb", // Separatori
						dark: "#374151", // Testo
						text: "#4b5563", // Testo secondario
					},
				},
			},
			backgroundImage: {
				"gradient-primary": "linear-gradient(to right, #db4437, #2563eb)",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
		},
	},
	plugins: [],
};
