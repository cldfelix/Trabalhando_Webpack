const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH ={
  src: path.join(__dirname, '../src'),
  build: path.resolve(__dirname, '../deploy'),
}

module.exports = {
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Webpack Output",
  //   }),
  // ],
  entry: {
    main: `${PATH.src}/js/app.js`,
    main1: `${PATH.src}/js/app1.js`,
  },
  output: {
    //filename: "[name].[chunkhash].bundle.js",
    filename: "[name].bundle.js",
    path: PATH.build
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
     {
      test: /\.css$/,
      use:[
        {loader: 'style-loader'},
        {loader: 'css-loader', options: {modules: true}}
      ]

     },
     
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              mimetype: "image/png",
              encoding: true,
            },
          },
        ],
      },
    ],
  },
};