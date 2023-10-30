module.exports = {
  content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'flip-in-x': 'flip-in-x 1s ease-out',
        'fade-in-right': 'fade-in-right 0.8s ease-in-out',
      },
      keyframes: {
        'flip-in-x': {
          '0%': {
            opacity: 0,
            transform: 'rotateY(90deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0deg)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
};
