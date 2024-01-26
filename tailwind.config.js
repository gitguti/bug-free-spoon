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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
          'light-grey': '#E5E5E533',
          'new-black': '#212121',
          'lila': 'rgba(60, 13, 159, 0.04)', // Color con opacidad del 4%
          'grey-medium': '#1D1D1D0D',
          'soft-lila': '#CDC0E9',
          'new-white': '#F4F4F4',
          'purple': '#2B213E',
          'purple-vanish': '#6D5E8B',
          'dirty-grey': '#EDEDED'
    },
    },
  },
  plugins: [],
};
