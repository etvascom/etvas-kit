module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      config.module.rules[0].test = /\.jsx?$/
      config.resolve = {
        extensions: ['.js', '.jsx', '.json', '.css']
      }
      return config
    }
  }
}
