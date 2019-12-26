module.exports = {
   
   //publicPath: "/lunga",
    outputDir: "docs",
    publicPath: "/",
    runtimeCompiler: true ,

    pages: {
      index: {
        entry: 'src/main.js',
        template: 'src/index.html',
        filename: 'index.html'
      }
    }
  }
  