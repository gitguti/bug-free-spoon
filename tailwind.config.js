/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cta-app": "url('/CTAApp.webp')"
      },
      colors: {
        'light-grey': '#fcfcfc',
        'new-black': '#212121',
        'lila': '#EEF0FF', // Color con opacidad del 4%
        'grey-medium': '#1D1D1D0D',
        'soft-lila': '#CDC0E9',
        'new-white': '#F4F4F4',
        'purple': '#2B213E',
        'purple-vanish': '#6D5E8B',
        'dirty-grey': '#EDEDED',
        'another-grey': '#F1F1F1',
        'lavanda': '#E7E7FB',
        'sad-blue':  '#87ABF1',
        'navy-blue': '#1941A6'
      },
      borderColor: {
        'navy-blue': '#1941A6'
      },
      fontFamily: {
        'tomato': ['"Tomato Grotesk"', 'sans-serif'],
      },
      animation: {
        'slideDown': 'slideDown 0.75s cubic-bezier(0.42,0,1,1) forwards 3.5s',
        'slideUp': 'slideUp 1s cubic-bezier(0.42,0,0.58,1) forwards 3.5s',
        'slideUp2': 'slideUp 1s cubic-bezier(0.42,0,0.58,1) forwards',
        'slideUp-delay-1': 'slideUp 0.5s cubic-bezier(0.42,0,0.58,1) 1s forwards', // Añade un retraso de 0.5s
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0  },
          '100%': { transform: 'translateY(0)', opacity: 100 },
        },
        slideUp: {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 100 },
        },
      },
      maxWidth: {
        'screen-3xl': '90rem',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2540px'

      }
    },
  },
  plugins: [],
};
