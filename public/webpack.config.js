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
              loaders: ['babel?cacheDirectory']
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
  }
};