/**
 * Created by tomihei on 17/02/10.
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
