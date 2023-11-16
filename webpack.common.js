const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const BundleAnalyzerPlugin = require ('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = {
  entry: {
    app: path.resolve (__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve (__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin ({
      filename: 'index.html',
      template: path.resolve (__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin ({
      patterns: [
        {
          from: path.resolve (__dirname, 'src/public'),
          to: path.resolve (__dirname, 'dist'),
        },
      ],
    }),
    new BundleAnalyzerPlugin ({
      analyzerMode: 'disabled',
      openAnalyzer: false,
    }),
    // new MiniCssExtractPlugin({ filename: 'assets/css/[hash].css' }),
    // new HtmlWebpackInjectPreload({
    //   files: [
    //     {
    //       match: /.*\.css$/,
    //       attributes: { as: 'style', type: 'text/css' }
    //     }
    //   ]
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // minimizer: [
    //   '...',
    //   new CssMinimizerPlugin({
    //     minify: [
    //       CssMinimizerPlugin.cssnanoMinify,
    //       CssMinimizerPlugin.cssoMinify,
    //       CssMinimizerPlugin.cleanCssMinify
    //     ],
    //     minimizerOptions: {
    //       preset: ['advanced']
    //     }
    //   })
    // ]
  },
};
