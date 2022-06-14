const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
    // user: './src/user.js',
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
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
      filename: 'questions.html',
      template: "./src/questions.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'review.html',
      template: "./src/review.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'review-2.html',
      template: "./src/review-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'success.html',
      template: "./src/success.pug"
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
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-my-loans.html',
      template: "./src/lk-my-loans.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-restructure.html',
      template: "./src/lk-restructure.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-my-data.html',
      template: "./src/lk-my-data.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-actions.html',
      template: "./src/lk-actions.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-alerts.html',
      template: "./src/lk-alerts.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-contacts.html',
      template: "./src/lk-contacts.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'lk-mails.html',
      template: "./src/lk-mails.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'how-get.html',
      template: "./src/how-get.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'how-pay.html',
      template: "./src/how-pay.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'q-and-a.html',
      template: "./src/q-and-a.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'type.html',
      template: "./src/type.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'calc-v-2.html',
      template: "./src/calc-v-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'fail.html',
      template: "./src/fail.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'normativs.html',
      template: "./src/normativs.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'politic.html',
      template: "./src/politic.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'repayment.html',
      template: "./src/repayment.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'require.html',
      template: "./src/require.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'info-docs.html',
      template: "./src/info-docs.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'fail-2.html',
      template: "./src/fail-2.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'new-request.html',
      template: "./src/new-request.pug"
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