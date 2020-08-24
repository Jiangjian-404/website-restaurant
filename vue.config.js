module.exports = {
  devServer: {
    port: 8080,
    open: true
  },
  css: {
    loaderOptions: {
      stylus: {
        data: '@import "@/assets/stylus/_variable.styl";'
      }
    }
  }
};
