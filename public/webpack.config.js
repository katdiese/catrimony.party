module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.jsx?$/,
              // Enable caching for improved performance during development
              // It uses default OS directory by default. If you need
              // something more custom, pass a path to it.
              // I.e., babel?cacheDirectory=<path>
              loaders: ['babel?cacheDirectory'],
              // Parse only app files! Without this it will go through
              // the entire project. In addition to being slow,
              // that will most likely result in an error.
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
  }
};