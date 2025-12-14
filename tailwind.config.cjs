module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dim': '#b59226',
        dark: '#0f0f0f',
        glass: 'rgba(255,255,255,0.05)'
      },
      fontFamily: {
        playfair: ['"Playfair Display"','serif'],
        poppins: ['Poppins','sans-serif'],
        tangerine: ['Tangerine','cursive'],
        cormorant: ['"Cormorant Garamond"','serif']
      }
    }
  },
  plugins: []
}
