// console.log(process.env.npm_lifecycle_script)
// console.log(process.argv.length)
// console.log(process.argv)
const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const build_env = require('./config/set.env.ts')
console.log(build_env)
module.exports = {
  devServer: {
    open: false
  },
  // 选项...
  pluginOptions: {

  },
  transpileDependencies: [resolve('config/index.ts'), resolve('config/set.env.ts')],
  configureWebpack: {
    resolve: {
      alias: {
        'config': resolve('config'),
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(build_env)
      })
    ]
  }
}
