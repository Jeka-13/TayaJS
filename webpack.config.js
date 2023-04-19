const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config =  {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
}

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'eval',
    devServer: {
        port: 4200,
        hot: isDev
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    resolve: {
        alias: {
            'tayaJS': path.join(__dirname, 'src/library/imports.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/public/path/to/",
                        },
                    },
                    "css-loader",
                ],
            }
        ]
    }
}