const webpack = require('webpack')

module.exports = {
  createPages: async ({ actions }) => {
    const { createPage } = actions
    createPage({
      path: '/using-dsg',
      component: require.resolve('./src/templates/using-dsg.js'),
      context: {},
      defer: true
    })
  },
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: [require.resolve('buffer/'), 'Buffer']
        })
      ],
      resolve: {
        fallback: {
          crypto: false,
          stream: require.resolve('stream-browserify'),
          assert: false,
          util: false,
          http: false,
          https: false,
          os: false
        }
      }
    })
  }
}
