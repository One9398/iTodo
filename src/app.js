'use strict';

var express = require("express");
var router = require("../api/index.js");

require("./data.js");

var app = express();
app.use("/", express.static('public'));
app.use('/api', router);


app.listen(3000, function () {
	// body...
	console.log('The service is on 3000 port');
})