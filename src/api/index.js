'use strict';
// var todos = require("../mock/todos.json");
var express = require("express");
var router = express.Router();
var Todo = require("../models/todo")

// GET
router.get('/todos', function(req, res) {	
	Todo.find({}, function(error, todos) {
		if (error) {
			return res.status(500).json({message: error.message});
		} else {
			res.json({todos: todos});

		}
	});

});

// POST
router.post('/todos', function(req, res) {
	var todo = req.body;
	Todo.create(todo, function(error, todo) {
		if (error) {
			return res.status(500).json({message: error.message});
		} else {
			res.json({todo: todo, message: 'Todo Created'});
		}	
	});
});

// PUT
router.put('/todos/:id', function(req, res) {
	var id = req.params.id;
	var todo = req.body;
	if (todo && todo._id !== id) {
		return res.status(500).json({error: "id don't match !"});		
	}

	Todo.findByIdAndUpdate(id, todo, {new: true}, function(error, todo) {
		if (error) {
			return res.status(500).json({message: error.message});
		} else {
			res.json({todo: todo, message: 'Todo Update'});
		}

	});
});

// Delete
router.delete('/todos/:id', function(req, res) {
	var id = req.params.id;

	Todo.findOneAndRemove(id, {}, function(error, todo, result) {
		if (error) {
			console.error(error);
			return res.status(500).json({message: error.message});						
		} else {
			res.json({message: "Todo Delete", todo: todo});
			console.log(result);
		}
	})
});


module.exports = router;
