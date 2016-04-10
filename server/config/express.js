var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser');

module.exports = function(app, config){

	function compile(str,path){
		return stylus(str).set('filename',path);
	}

	app.set('public', config.rootPath + '/public');
	app.set('view engine', 'html');
	app.engine('html', require('ejs').renderFile);

	// app.use('public/vendor',  express.static(config.rootPath + '/vendor')); 
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));   
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
}
