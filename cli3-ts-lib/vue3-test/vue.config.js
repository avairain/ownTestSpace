const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .use(webpack.DefinePlugin, { 'DEVOPS_ENV': JSON.stringify('DEVOPS_ENV') })
      .init((Plugin, args) => new Plugin(args))
  }
}