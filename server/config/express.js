var express = require('express'),
	stylus = require('stylus'),
	passport = require('passport'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	ejs = require('ejs');

module.exports = function(app, config){

	function compile(str,path){
		return stylus(str).set('filename',path);
	}

	app.set('public', config.rootPath + '/public');
	app.set('view engine', 'html');
	app.engine('html', ejs.renderFile);

	// app.use('public/vendor',  express.static(config.rootPath + '/vendor')); 
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({secret:'into the void',resave:false,saveUninitialized:false}));   
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
}
