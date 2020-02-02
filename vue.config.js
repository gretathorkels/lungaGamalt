const Mode = require('frontmatter-markdown-loader/mode');
const path = require("path");

module.exports = {
  //publicPath: "/lunga",
  outputDir: "dist",

  publicPath: "/",
  runtimeCompiler: true,
  
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  chainWebpack: config => {
   config.module
     .rule('markdown')
     .test(/\.md$/)
     //.path('/workshops')
     .use('frontmatter-markdown-loader')
       .loader('frontmatter-markdown-loader')
       .tap(options => {
         return {
           mode: [Mode.VUE_COMPONENT, Mode.META]
         }
       })
 },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
   
