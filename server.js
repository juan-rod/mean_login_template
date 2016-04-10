var express = require('express'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config= require('./server/config/config')[env];

require('./server/config/express.js')(app,config);

require('./server/config/mongoose.js')(config);

require('./server/config/routes.js')(app);

app.listen(config.port);
console.log('Listening on config.port '+ config.port + '...');

