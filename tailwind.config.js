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
        "cta-app": "url('/CTAApp.png')"
      },
      colors: {
        'light-grey': '#E5E5E533',
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
        'scroll-left': 'loop-scroll-left 30s  linear infinite',
        'scroll-right': 'loop-scroll-right 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'marquee1': 'marquee1 30s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'move1': 'marquee2 10s linear infinite',
        'move2': 'marquee1 10s linear infinite',

      },
      keyframes: {
        'loop-scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee2': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'loop-scroll-right': {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'marquee1': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      maxWidth: {
        'screen-3xl': '90rem',
      },
      screens: {
        '3xl': '2540px'
      }
    },
  },
  plugins: [],
};
