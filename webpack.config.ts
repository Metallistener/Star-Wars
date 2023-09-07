import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProvidePlugin, Configuration as WebpackConfiguration } from 'webpack';
import fs from 'fs';
import Dotenv from 'dotenv-webpack';

const isDev = process.env.NODE_ENV !== 'production';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

require('dotenv').config();

module.exports = {
  mode: 'production',
  devtool: isDev ? 'eval-source-map' : 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: ['node_modules', resolveApp('node_modules')].concat(
      resolveApp('src'),
    ),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/,
        issuer: /\.tsx$/,
        use: [{ loader: '@svgr/webpack', options: { typescript: true } }],
        resourceQuery: /svgr/,
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './public/favicon.ico',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: !isDev ? 'styles-[contenthash].css' : 'styles.css',
      ...(!isDev && { ignoreOrder: true }),
    }),
    new Dotenv({
      path: `.env.production`,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
} as WebpackConfiguration;
