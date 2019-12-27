const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  //outputDir: "docs",
  output: {
    path: path.resolve(__dirname, './dist'),
    
    publicPath: 'public/index.html',
    filename: 'index.html'
  },
  // devtool: '#cheap-module-eval-source-map',
  // resolve: {
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js'
  //   }
  // },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        loaders: [
          'vue-loader',
          {
            loader: path.resolve(__dirname, './src/main.js'),
            options: {
              preProcess (source) {
                // console.log('pre', source)
                return source
              },
              afterProcess (result) {
                // console.log('after', result)
                return result
              },
              afterProcessLiveTemplate (template) {
                return `<div class="live-wrapper">${template}</div>`
              },
              rules: {
                table_open: () => '<div class="table-responsive"><table class="table">',
                table_close: () => '</table></div>'
              },
              plugins: [
                [
                  require('markdown-it-anchor'),
                  {
                    permalink: true,
                    permalinkSymbol: '&#128279;'
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}