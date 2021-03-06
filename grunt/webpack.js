var path = require('path')
var webpack = require('webpack')
const { InjectManifest } = require('workbox-webpack-plugin')
const sass = require('node-sass')

const processEnv = {
  NODE_ENV: JSON.stringify('production'), // !process.env.BUILD_CONFIG ? JSON.stringify('development') : process.env.BUILD_CONFIG === 'development' ? JSON.stringify('development') : JSON.stringify('production'),
  BUILD_CONFIG: JSON.stringify(process.env.BUILD_CONFIG),
  PORT: JSON.stringify(process.env.PORT)
}

module.exports = {
  client: {
    mode: 'production',
    entry: {
      client: './app/client/index.jsx'
    },
    output: {
      path: path.resolve(__dirname, '../dist/static/ui/js/'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].[contenthash].bundle.js',
      devtoolLineToLine: true,
      sourceMapFilename: './bundle.js.map',
      pathinfo: true,
      publicPath: '/ui/js/' // need this to ensure that the lazy loaded components can map PATH > URL
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['./node_modules', path.resolve(__dirname, './client')],
      // need this to ensure Webpack can read
      mainFields: ['webpack', 'browser', 'web', 'main'],
      // require this for build, but don't want to expose config to browser.
      alias: {
        config: path.resolve(__dirname, '../app/client/client-config-loader.js')
      }
    },
    module: {
      rules: [
        {
          test: [/\.jsx$/, /\.js$/],
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          loader: 'ignore-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': processEnv
      }),
      new InjectManifest({
        swSrc: path.resolve(__dirname, '../app/client/service-worker.js'),
        swDest: path.resolve(
          __dirname,
          '../dist/static/ui/js/service-worker.js'
        ),
        exclude: [/\.js$/]
      })
    ],
    stats: {
      colors: true,
      modules: false,
      reasons: false,
      errorDetails: true
    },
    performance: {
      maxEntrypointSize: 812000,
      maxAssetSize: 812000
    }
  },
  server: {
    mode: 'production',
    devtool: 'eval',
    entry: {
      server: ['./app/server/index.jsx']
    },
    output: {
      path: path.resolve(__dirname, '../dist/app/'),
      filename: 'server.bundle.js',
      devtoolLineToLine: true,
      sourceMapFilename: './bundle.js.map',
      pathinfo: true
    },
    target: 'node',
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['./node_modules', path.resolve(__dirname, 'app')],
      // need this to ensure Webpack can read
      mainFields: ['webpack', 'main'],
      alias: {
        config: path.resolve(__dirname, '../app/config-loader.js')
      }
    },
    resolveLoader: {},
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              /*
               * Need to replace the url for the fonts
               */
              loader: 'string-replace-loader',
              options: {
                multiple: [
                  {
                    search: '../font/',
                    replace: '/ui/font/',
                    flags: 'gi'
                  },
                  {
                    search: '!important',
                    replace: '',
                    flags: 'g'
                  }
                ]
              }
            },
            {
              /*
               * css-loader breaks with url imports for fonts so use raw-loader
               */
              loader: 'raw-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                outputStyle: 'compressed',
                includePaths: ['node_modules', 'static/ui/scss']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': processEnv
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1 // only want 1 chunk for server, i.e. ignore code splitting
      })
    ],
    stats: {
      colors: true,
      modules: false,
      reasons: false,
      errorDetails: true,
      warningsFilter: /^(?!CriticalDependenciesWarning$)/
    }
  }
}
