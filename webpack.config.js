const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
}
