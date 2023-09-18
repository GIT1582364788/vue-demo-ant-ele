const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host:'localhost',
    port: 5000,
    open: true,
    proxy: {
      '/jn-boot': {
        target: 'http://192.168.18.174:8080/jn-boot', //API接口系统
        ws: false,
        changeOrigin: true,
       },
    }
  },
})
