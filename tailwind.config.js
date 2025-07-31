export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      animation: {
      'bounce-slow': 'bounce 2.5s infinite',
      'fade-in': 'fadeIn 1.2s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
  plugins: [],
};


