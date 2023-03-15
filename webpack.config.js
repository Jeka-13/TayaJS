const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: './main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'eval',
    devServer: {
        port: 4200
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ]
}