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
    aliases: {
      src: path.resolve('src')
    },
    config(config) {
      config.module.rules[0].test = /\.jsx?$/
      config.resolve = {
        ...config.resolve,
        extensions: ['.js', '.jsx', '.json', '.css']
      }
      return config
    }
  },
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src'
          }
        }
      ]
    ]
  }
}
