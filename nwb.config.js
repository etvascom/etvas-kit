const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    html: {
      template: 'demo/index.html'
    },
    config(config) {
      config.module.rules[0].test = /\.jsx?$/
      config.resolve = {
        extensions: ['.js', '.jsx', '.json', '.css'],

        alias: {
          src: path.resolve('./src')
        }
      }
      return config
    }
  }
}
