module.exports = {
  purge: [], // or 'media' or 'class'
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
    },
  },
  plugins: [],
}