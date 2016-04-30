var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development : {
		db: 'mongodb://localhost/void',
		rootPath: rootPath,
		port: process.env.PORT || 3031
	},
	production: {
		db: 'mongodb://'{{voidUser:voidUser#123@ds047652.mlab.com:47652/void}},
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}