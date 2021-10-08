module.exports = {
  plugins: [
    require('postcss-autoreset')({
      reset: {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
      }
    }),
    require('postcss-nested')
  ],
}