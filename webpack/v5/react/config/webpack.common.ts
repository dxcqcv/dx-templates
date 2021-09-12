import * as path from 'path'
import * as webpack from 'webpack'
import { appSrc, appHtml, appDist} from './paths'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as PrettierPlugin from 'prettier-webpack-plugin'
import * as ESLintPlugin from 'eslint-webpack-plugin'

console.log('check appSrc', appSrc)
const config: webpack.Configuration = {
	entry: [`${appSrc}/index.js`] ,
	output: {
		path: appDist ,
		filename: '[name].bundle.js'
	},
	module: {
		rules:[
			{
				test: /\.(js|ts|jsx|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'esbuild-loader',
					options: {
						loader:'tsx',
						target:'es5'
					}
				}
			}
		]
	}
}

export default config