'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/iTodo", function (error) {
	if (error) {
		console.log('connect fail to database !');
		console.error(error);
	} else {
		console.log('connect to database successfully !');

	}
})