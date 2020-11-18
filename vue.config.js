module.exports = {
  pages: {
    top: {
      entry: 'src/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
    },
    'news/20201105': 'src/news.js', // エントリーポイントとなるjs

  },
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