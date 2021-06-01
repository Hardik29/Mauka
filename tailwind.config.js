module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mysite-mediumblue': '#106EEA',
        'mysite-boldblue': '#0A1E32',
        'mysite-lightblue': '#e1d8f1',
      }
    },
  },
  variants: {
    extend: {
      scale : ['group-hover'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}