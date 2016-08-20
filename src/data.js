'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://one:zxc123@ds013216.mlab.com:13216/itodo", function (error) {
	if (error) {
		console.log('connect fail to database !');
		console.error(error);
	} else {
		console.log('connect to database successfully !');

	}
})