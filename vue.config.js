const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
   
    //publicPath: "/lunga",
     outputDir: "dist",
     publicPath: "/",
     runtimeCompiler: true ,
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
        .use('frontmatter-markdown-loader')
          .loader('frontmatter-markdown-loader')
          .tap(options => {
            return {
              mode: [Mode.VUE_COMPONENT]
            }
          })
    }
   }
   