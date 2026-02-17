/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#050505',
          800: '#0a0a1a',
          700: '#1a1a2e',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f4cf57',
          dark: '#b48f17',
        }
      },
      fontFamily: {
        heading: ['"Cinzel Decorative"', 'serif'],
        body: ['"Almendra"', 'serif'],
      },
      backgroundImage: {
        'celestial-gradient': 'linear-gradient(to bottom, #050505, #1a1a2e)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-text': '0 0 10px rgba(255, 255, 255, 0.5)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}
