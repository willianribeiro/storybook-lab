const path = require('path');

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".scss", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
