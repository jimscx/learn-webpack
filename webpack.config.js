var path = require('path');
var webpack = require('webpack');
var config= {
	/*
	 *这里配置方便调试时使用的source map  如何生成相应格式的source map
	 */
	  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/public/js",//打包后的文件存放的地方
    	filename: "bundle.js"//打包后输出文件的文件名
  	},
  	/*  	
  	 *Loaders需要单独安装并且需要在webpack.config.js下的modules关键字下进行配置
  	 */
  	module: {//在配置文件里添加JSON loader
    	loaders: [
      	{
        	test: /\.json$/, //这里是匹配的文件
        	loader: "json" //这里loader的名字 会自动寻找node_modules中我们安装的module
      	},{
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader'
          ]
        },{
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css']
        } 
    	]
  	},
    resolve: {
      //查找module的话从这里开始查找
        //root: '/pomy/github/flux-example/src', //绝对路径
        
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        // alias: {
        //     AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
        //     ActionType : 'js/actions/ActionType.js',
        //     AppAction : 'js/actions/AppAction.js'
        // }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ],
  	/*
  	 *这里配置服务
  	 */
  	devServer: {
   	 	contentBase: "./",//本地服务器所加载的页面所在的目录
    	colors: true,//终端中输出结果为彩色
    	historyApiFallback: true,//不跳转
    	inline: true//实时刷新
  	}
}
module.exports = config;