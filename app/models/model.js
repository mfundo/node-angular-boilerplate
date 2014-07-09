
var mongoose	=	require('mongoose');

module.exports	=	mongoose.model('Model Name', {
	name:	String,
	done: 	Boolean,
	age: 	Number
});