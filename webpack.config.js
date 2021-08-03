const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'raw-loader',
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    library: 'ImageEdit',
    libraryTarget: 'umd',
    filename: 'image-edit.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
