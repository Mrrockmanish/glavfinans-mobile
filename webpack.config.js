const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
    user: './src/user.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: "images/[name][ext][query]",
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-about.html',
      template: "./src/step-about.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-pass.html',
      template: "./src/step-pass.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'step-upload.html',
      template: "./src/step-upload.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'up-rating.html',
      template: "./src/up-rating.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'up-rating-2.html',
      template: "./src/up-rating-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'questions.html',
      template: "./src/questions.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'clarify.html',
      template: "./src/clarify.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'add-card.html',
      template: "./src/add-card.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'last-step.html',
      template: "./src/last-step.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'confirm.html',
      template: "./src/confirm.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'entry.html',
      template: "./src/entry.pug"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}