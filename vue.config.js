// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/api': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/user': {
        target: 'http://111.230.178.132:4000/',
        changeOrigin: true,
        pathRewrite: {
          '^/user': ''
        }
      }

    }
  }
}
