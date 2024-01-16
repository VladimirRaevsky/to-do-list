import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) =>
							Boolean(resourcePath.includes(".module.")),
						localIdentName: options.isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:5]",
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	const tsLoaders = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/i,
		use: ["@svgr/webpack"],
	};

	return [tsLoaders, scssLoader, svgLoader];
}
