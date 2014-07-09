
//Load model

var Model = require('./models/modelfile');	//change var name and modelfile name


module.exports = function(app){

	app.get('/api/model', function(req, res){ //get all items
		// logic
	});

	app.post('/api/model', function(req, res){ //create an item
		// logic
	});

	app.delete('/api/model/:model_id', function(req, res){ //delete an item
		// logic
	});

	app.get('*', function(req, res){ //load the single view file (angular to handle the interaction)
		res.send('./public/index.html');
	});
};