/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  cyber: {
    dark: '#1a1e3f',      // ← Lighter background
    darker: '#0f1320',    // ← Less harsh dark
    blue: {
      50: '#7CA8E0',
      100: '#6B97CF',
      200: '#5A86BE',
      300: '#4A76AD',
      400: '#3A669C',
      500: '#2A567B',
      600: '#24486A',
      700: '#1E3A59',
      800: '#182C48',
      900: '#121E37'
    },
    purple: {
      50: '#B850FF',      // ← Brighter!
      100: '#A745F5',
      200: '#8B4FDB',     // ← Brighter purple
      300: '#7B3FC4',     // ← More vibrant
      400: '#6A35AD',
      500: '#5A2B96'
    },
    pink: {
      50: '#FFA5C1',
      100: '#FF8FB5',
      200: '#FF6FB5',     // ← Lighter pink
      300: '#FF3DA8',     // ← Softer pink
      400: '#FF1D93',
      500: '#FF007F'
    },
    cyan: {
      50: '#60FFFC',      // ← Super bright!
      100: '#40F8F5',
      200: '#20F0F3',
      300: '#00E5E8',     // ← Brighter cyan
      400: '#00D8DB',
      500: '#00C8CB'      // ← More glow
    }
  }

      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        cyber: ['Orbitron', 'sans-serif']
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 3s linear infinite'
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'pulse-neon': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 243, 237, 0.8), 0 0 40px rgba(155, 48, 255, 0.4)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 10px rgba(0, 243, 237, 0.6), 0 0 20px rgba(155, 48, 255, 0.3)'
          }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' }
        }
      }
    },
  },
  plugins: [],
}
