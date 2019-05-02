const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssClean = require('postcss-clean');
const postcssGlobalImport = require('postcss-global-import');
const postcssNested = require('postcss-nested');
const webpack = require('webpack');

module.exports = (env, { mode }) => {
  const __PROD__ = mode == 'production'; // Execute in production mode
  const __DEV__ = !__PROD__; // Default - Execute in dev mode

  const paths = {
    root: (path = '') => `${__dirname}/${path}`,
    src: (path = '') => `${__dirname}/src/${path}`,
  };

  // =======================
  // Rules
  // =======================

  const rules = [
    // JS
    {
      exclude: /node_modules/,
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            'babel-plugin-lodash',
          ],
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      }],
    },
    // CSS
    {
      test: /\.css$/,
      use: [
        __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            import: false,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]',
            modules: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              postcssGlobalImport(),
              postcssNested(),
              autoprefixer(),
              postcssClean(),
            ],
          },
        },
      ],
    },
  ];

  // =======================
  // Plugins
  // =======================

  const plugins = [
    new HtmlWebpackPlugin({
      name: 'Calculator',
      template: paths.src('index.html'),
    }),
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
    }),
    new MiniCssExtractPlugin({
      filename: __DEV__ ? '[name].css' : 'assets/css/[name].[hash].css',
      chunkFilename: __DEV__ ? '[id].css' : 'assets/css/[id].[hash].css',
    }),
  ];

  // Development only plugins
  if (__DEV__) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  // =======================
  // Generate Config
  // =======================

  const config = {
    devtool: __DEV__ ? 'eval-source-map' : false,
    entry: {
      main: [
        paths.src('main'),
      ],
    },
    module: {
      rules,
    },
    output: {
      chunkFilename: __DEV__ ? '[id].js' : 'assets/js/[id].[chunkhash].js',
      filename: __DEV__ ? '[name].js' : 'assets/js/[name].[chunkhash].js',
      path: paths.root('dist'),
      publicPath: '/',
    },
    plugins,
    resolve: {
      extensions: ['*', '.js', '.json'],
      modules: [
        paths.src(),
        'node_modules',
      ],
    },
  };

  // Enable the dev server
  if (__DEV__) {
    config.devServer = {
      contentBase: paths.src(),
      historyApiFallback: true,
      hot: true,
      lazy: false,
      port: 3141,
      publicPath: '/',
      stats: {
        assets: true,
        children: false,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
      },
    };
  }

  // Return Config
  return config;
};
