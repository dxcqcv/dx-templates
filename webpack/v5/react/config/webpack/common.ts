﻿import * as webpack from 'webpack'
import { appSrc, appHtml, appDist, appPublic } from '../paths'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import  CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
// import * as PrettierPlugin from 'prettier-webpack-plugin'
import  ESLintPlugin from 'eslint-webpack-plugin'
import  ProgressBarPlugin  from 'progress-bar-webpack-plugin'
import chalk  from 'chalk'

const config: webpack.Configuration = {
	entry: [`${appSrc}/index.js`],
	output: {
		path: appDist,
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'esbuild-loader',
					options: {
						loader: 'tsx',
						target: 'es5'
					}
				}
			},
			// Images: Copy image files to build folder
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
			// Fonts and SVGs: Inline files
			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
		]
	},
	plugins: [
		   // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
		    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: appPublic ,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack react',
      favicon: `${appSrc}/images/favicon.ico` ,
      template: appHtml, // template file
      filename: 'index.html', // output file
    }),
    new ESLintPlugin({
			extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules'
    }),
    new ProgressBarPlugin({
			format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
    }),
	],
	resolve: {
		modules: [appSrc, 'node_modules'],
		extensions: ['.tsx', '.jsx', '.ts', '.js'],
		alias: {
			'@': appSrc,
		},
	},
	cache: {
    type: 'filesystem', 
  },
}

export default config