const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const outputDirectory = 'dist';
const dotenv = require('dotenv');
const fs = require("fs");

module.exports = (env, argv) => {
  const isDevelopmentMode = (argv.mode === 'development');

  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + env.ENVIRONMENT;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;


  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {})


  return {
    entry: ['babel-polyfill', './src/client/main.tsx'],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.global\.s(a|c)ss$/,
        loader: [
          isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },

      {
        test: /\.s(a|c)ss$/,
        exclude: /\.global.(s(a|c)ss)$/,
        loader: [
          isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: "css-modules-typescript-loader" },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              }
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
        }
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-modules-typescript-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              }
            }
          },
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.css', '.scss']
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        '/api': 'http://localhost:8080'
      }
    },
    node: { fs: 'empty' },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopmentMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopmentMode ? '[id].css' : '[id].[hash].css'
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};


// "process.env.JWT_SECRET": JSON.stringify("aCoolValue")