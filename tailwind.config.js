export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#FAF9F6',      //main background
        'sepia': '#E8E4D9',          //sidebar background
        'bronze': '#1B3A52',         //headers and title
        'royal-gold': '#3E6990',     //logo text
        'deep-brown': '#0D1B2A',     // main text colour
        'leather': '#8B8C7A',        //meta, subtitles
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'display': ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  
  ],
}
