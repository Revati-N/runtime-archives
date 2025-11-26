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
          dark: '#0A0E27',
          darker: '#050810',
          blue: {
            50: '#5C8BCO',
            100: '#5179AC',
            200: '#4682B4',
            300: '#353B85',
            400: '#2C2971',
            500: '#21295F',
            600: '#1E1B51',
            700: '#1E1B4D',
            800: '#151B4D',
            900: '#0A0F3D'
          },
          purple: {
            50: '#9B30FF',
            100: '#8A2BE2',
            200: '#663AA3',
            300: '#5F2BA4',
            400: '#512A94',
            500: '#3D1278'
          },
          pink: {
            50: '#FF85A1',
            100: '#FF7BA9',
            200: '#FF4F9A',
            300: '#FF1493',
            400: '#FF007F',
            500: '#FF69B4'
          },
          cyan: {
            50: '#39D4B7',
            100: '#2DC3C1',
            200: '#00B2A9',
            300: '#00CED1',
            400: '#40E0D0',
            500: '#00F3ED'
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
