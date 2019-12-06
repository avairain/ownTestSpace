const path = require('path')
const rm = require('rimraf')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const chalk = require('chalk');
const os = require('os')
const osType = os.type(); //系统类型
const netInfo = os.networkInterfaces(); //网络信息
let ip = '';
if (osType === 'Windows_NT') { 
    for (let dev in netInfo) {
    	//win7的网络信息中显示为本地连接，win10显示为以太网
        if (dev === '本地连接' || dev === '以太网' || dev === 'WLAN') {
            for (let j = 0; j < netInfo[dev].length; j++) {
                if (netInfo[dev][j].family === 'IPv4') {
                    ip = netInfo[dev][j].address;
                    break;
                }
            }
        }
    }

} else if (osType === 'Linux') {
    ip = netInfo.eth0[0].address;
}

rm(path.join(__dirname, 'dist'), (err) => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )
    process.stdout.write(`your application has run in ` + chalk.green.underline.bold(`${ip}:${webpackConfig.devServer.port}\n`))
  })
})