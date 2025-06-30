// tailwind.config.js
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // From left bar (Pikachu yellow)
        pikachu:        '#FCEA2B',
        // The red accent
        pikaRed:        '#ED1C24',
        // The brown detail
        pikaBrown:      '#5D3317',
        // Pure black
        pikaBlack:      '#000000',
        // Lighter yellow from right bar
        pikachuLight:   '#FFF761',
      },
      // Animate the gradient on these new colors
      keyframes: {
        'gradient-pan': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%':     { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 10s ease infinite',
      },
    },
  },
  plugins: [],
}
