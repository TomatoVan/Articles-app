import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./byildReslolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const {mode, paths } = options
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
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),

	}
}