

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
     chainWebpack(config){
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
          })
      }
   }
   