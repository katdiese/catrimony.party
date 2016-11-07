const webpack = require('webpack');

module.exports = {
    entry: "./public/index.js",
    output: {
        path: "./public",
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
    },

};