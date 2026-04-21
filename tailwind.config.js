/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E5',
          100: '#FFEA94',
          200: '#FFD8A6',
          300: '#F3D060',
          400: '#F3B700',
          500: '#D9A400',
          600: '#BF9100',
          700: '#8C6B00',
          800: '#594400',
          900: '#2B2100',
        },
        navy: {
          50: '#E8E8F0',
          100: '#B0B0CC',
          200: '#7878A8',
          300: '#404084',
          400: '#1A1A6B',
          500: '#000634',
          600: '#00052B',
          700: '#000422',
          800: '#000319',
          900: '#000210',
        },
        brand: {
          peach: '#FFD8A6',
          pink: '#FFC0CB',
          lightYellow: '#FFEA94',
          dark: '#181818',
          bodyGray: '#555555',
          lightGray: '#F8F8F8',
          cardGray: '#F3F3F3',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
