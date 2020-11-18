module.exports = {
  pages: {
    top: {
      entry: 'src/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
    },
    '20201105': {
      entry: 'src/news.js',
      template: 'public/news/20201105/index.html',
      filename: 'news/20201105/index.html',
    }
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