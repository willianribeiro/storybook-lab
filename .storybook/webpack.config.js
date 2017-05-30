const path = require('path');

module.exports = {
  module: {
    resolve: {
      extensions: [".jsx", ".js", ".scss", ".css"]
    },
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
