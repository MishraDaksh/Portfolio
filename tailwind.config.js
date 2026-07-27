/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0A0A0A',
          card: '#111111',
          elevated: '#161616',
        },
        border: {
          subtle: '#1E1E1E',
          hover: '#2E2E2E',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#8A8A8A',
          muted: '#5A5A5A',
        },
        accent: {
          DEFAULT: '#D4FF3F',
          hover: '#c2f026',
        },
        success: '#4ADE80',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

