'use strict';
var todos = require("../mock/todos.json");
var express = require("express");
var router = express.Router();

router.get('/todos', function(req, res) {	
	res.json(todos);
});


module.exports = router;
