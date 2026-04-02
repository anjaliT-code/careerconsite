/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#07080A',
        'steel-gray': '#1C1F26',
        'titanium': '#8B9BAD',
        'radar-green': '#00FF88',
        'gdg-blue': '#4285F4',
        'gdg-purple': '#7C3AED',
        'gdg-red': '#EA4335',
        'gdg-yellow': '#FBBC05',
        'ghost-white': '#E8ECF0',
        'hud-cyan': '#00D4FF',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'hex-grid': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%2300D4FF' stroke-opacity='0.04' fill='none'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
