// const path = require('path')
// const proxy = require('http-proxy-middleware')
// const apiMocker = require('mocker-api')
// module.exports = function(app) {
//   app.use(
//     '/baidu',
//     proxy({
//       target: 'https://www.baidu.com/',
//       changeOrigin: true,
//     }),

//   apiMocker(app, path.join('mock/'))
// }
const path = require('path')
const proxy = require('http-proxy-middleware')
const apiMocker = require('mocker-api')
module.exports = app => {
  //   app.use(
  //     '/baidu',
  //     proxy({
  //       target: 'https://www.baidu.com/',
  //       changeOrigin: true,
  //     }),
  apiMocker(app, path.resolve('mock/'))
}
