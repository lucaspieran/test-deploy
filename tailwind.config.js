/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1650px'
      },
      fontFamily: {
        nunito: ['Nunito'],
        mono: ['Space Mono'],
        neue: ['Bebas Neue'],
        montserrat: ['Montserrat'],
        popins: ['Poppins'],
      },
      colors: {
        primary: '#08FFFF',
        secondary: '#6953FF',
        purple: '#6B3686',
        startia: '#E5FF2A',
        devify: '#6B3686',
      },
      screens: {
        '3xl': '1700px',
      },
      keyframes: {
        text: {
          '0%': {
            opacity: '0',
          },
          '10%': {
            opacity: ' 0.5',
          },
          '30%': {
            opacity: '1',
          },
        },
        phone: {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(20px)',
          },
          '50%': {
            transform: 'translateX(30px)',
          },
          '75%': {
            transform: 'translateX(20px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        'text-animated': 'text 4.2s linear infinite',
        'phone-img': 'phone 4s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
