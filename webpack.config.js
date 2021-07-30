const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['babel-plugin-transform-class-properties'],
          },
        }],
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
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
