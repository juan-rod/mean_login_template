var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development : {
		db: 'mongodb://localhost/uPickv2',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://juanrod:upickv2@ds011228.mlab.com:11228/upickv2',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}