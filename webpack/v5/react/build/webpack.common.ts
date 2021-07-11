import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import WebpackDevServer from 'webpack-dev-server'

const config: webpack.Configuration = {
	mode: 'production',
	entry: path.resolve(__dirname, '../app/src/index.js') ,
	output: {
		path: path.resolve(__dirname, '../app/dist'),
		filename: 'foo.bundle.js'
	}
}

export default config