module.exports = {
  devServer: {
    host: "localhost"
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/utils.scss";'
      }
    }
  }
}