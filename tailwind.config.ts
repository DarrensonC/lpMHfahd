import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta M.H FAHD Imobiliária
        primary: {
          DEFAULT: '#0F2744', // Azul marinho da logo
          dark: '#0A1B2E',
          light: '#1A3A5C',
        },
        silver: {
          DEFAULT: '#C0C5CE',
          light: '#E8EAED',
          dark: '#A0A5AE',
        },
        accent: {
          gold: '#D4AF37',
          lightblue: '#4A90A4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

