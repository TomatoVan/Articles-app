import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins ({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		//to create html files  to serve our bundles
		new HTMLWebpackPlugin({
			//to use html file in public as template
			template: paths.html
		}),
		//build progression
		new webpack.ProgressPlugin()

	]
}