'use strict';

var express = require("express");
var router = require("./api/index.js");
var parser = require("body-parser");
require("./data.js");
require("./seed.js");
var app = express();
app.use(parser.json());
app.use("/", express.static('public'));
app.use('/api', router);

app.listen(3000, function () {
	// body...
	console.log('The service is on 3000 port');
})