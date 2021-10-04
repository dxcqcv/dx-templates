﻿
import * as webpack from 'webpack'
import {merge} from 'webpack-merge'
import common from './common' 
import {  appDist } from '../paths'
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

// measure loader time
const smp = new SpeedMeasurePlugin()

const isNeedSpeed = true 

const config =  merge(
	common,
	{
		mode: 'development',
		devtool: 'eval-cheap-module-source-map',
		devServer: {
			open: true,
			contentBase: appDist,
			hot: true,
			port: 8866
		},
		module: {
			rules:[
				// Styles: Inject css into the head with source maps
				{
					test: /.(scss|css)$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {sourceMap: true, importLoaders: 2, modules: true}
						},
						{loader: 'postcss-loader'},
						{loader: 'sass-loader', options:{sourceMap: true}}
					]
				}
			]
		},

		plugins: [
			// Only update what has changed on hot reload
			new webpack.HotModuleReplacementPlugin()
		]
	}
)
export default isNeedSpeed ? smp.wrap(config) : config 