import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
    // to create html files  to serve our bundles
        new HTMLWebpackPlugin({
            // to use html file in public as template
            template: paths.html,
        }),
        // build progression
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new ReactRefreshPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
