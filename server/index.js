var path = require('path');
var express = require('express');

var app = express();

var webpack;

//The point of this file is to serve my webapp.
//Production packages
if(process.env.NODE_ENV !== 'production'){
	webpack  = require('webpack');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackConfig = require('../webpack.config.js');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true, publicPath: webpackConfig.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler));
}


app.use(express.static(path.resolve('public')));

//Direct all routes to my webapp.
app.get('*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log("listening on port", PORT);
});
