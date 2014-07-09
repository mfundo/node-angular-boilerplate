
//Initialize =============================================================================================================

var express		=	require('express');					
var	app			=	express();							//load express app
var port  	 	= 	process.env.PORT || 2014;			//set localhost port
var mongoose 	= 	require('mongoose');
var database 	= 	require('./config/database.js');	//load database config


//Configuration ===========================================================================================================

mongoose.connect(database.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});


// Routes =================================================================================================================

require('./app/routes.js')(app);


// Server =================================================================================================================

app.listen(port);
console.log("App listening on port " + port);