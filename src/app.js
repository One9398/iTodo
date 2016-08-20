'use strict';

var express = require("express");
var router = require("./api/index.js");
var parser = require("body-parser");
require("./data.js");
require("./seed.js");
var app = express();
app.set("port", process.env.PORT || 3000);
app.use(parser.json());
app.use("/", express.static('public'));
app.use('/api', router);

app.listen(app.get("port"), function () {
	// body...
	console.log('The service is on Port' + app.get("port"));
})