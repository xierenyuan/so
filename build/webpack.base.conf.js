var path = require('path');
var config = require('../config');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');
module.exports = {
    entry: {
        app: './src/bootstrap.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js',
        sourceMapFilename: '[name].bundle.map'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'utils': path.join(__dirname, '../src/utils/utils.js')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'ng-annotate?add=true!babel?sourceMap&presets[]=es2015',
            include: projectRoot,
            exclude: /(node_modules|bower_components|'src\/\lib')/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!autoprefixer-loader!less?sourceMap'
            )
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!autoprefixer-loader'
            )
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!autoprefixer-loader!sass?sourceMap'
            )
        }, {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, '../src/')) + '!html',
            exclude: /(index.tpl)/
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: process.env.NODE_ENV === 'production' ? 'u' : 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: process.env.NODE_ENV === 'production' ? 'u' : 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
};