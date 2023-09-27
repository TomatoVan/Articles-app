import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins ({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		//to create html files  to serve our bundles
		new HTMLWebpackPlugin({
			//to use html file in public as template
			template: paths.html
		}),
		//build progression
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename:'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})

	]
}