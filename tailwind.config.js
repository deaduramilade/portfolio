/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { ink: '#09090b', panel: '#121217', accent: '#7c3aed' },
      boxShadow: { glow: '0 0 45px rgba(124, 58, 237, .2)' },
    },
  },
  plugins: [],
}
