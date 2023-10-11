import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildReslolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const {mode, paths, isDev } = options
	return {
		//dev or prod
		mode: mode,
		//where to get code from (__dirname for using path in any OS)
		entry: paths.entry,
		//how to output to dist
		output: {
			//hash for uuid generate
			filename: "[name].[contenthash].js",
			//output name
			path:paths.build,
			//clean all prev
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? "inline-source-map" : undefined,
		devServer:  isDev ? buildDevServer(options): undefined

	}
}