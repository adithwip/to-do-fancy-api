var Todo = require('../models/Todo');
var verifyToken = require('../helpers/verifyToken');

function findAllTodos (req, res) {
	verifyToken.userInfo(req.body.token, result => {
		Todo.find({ creator: result.id }, (err, todos) => {
			res.send(todos)
		})
	})
}

function createTodo (req, res) {

	var task = req.body.task;
	var date_todo = req.body.date_todo;
	var tags = req.body.tags.split(',');

	tags = tags.map(tag => tag.trim());

	verifyToken.userInfo(req.body.token, (result) => {
		
		var newTodo = new Todo({
			task: task,
			date_todo: date_todo,
			creator: result.id,
			status: false,
			tags: tags
		})

		newTodo.save((err, todo) => {
			if (!err) {
				res.send(todo)
			} else {
				res.send(err)
			}
		})

	})
	
}

function findOneTodo (req, res) {
	Todo.find({
		_id: req.params.id
	})
	.then(todo => {
		res.send(todo)
	})
}

function updateTodo (req, res) {
	verifyToken.userInfo(req.body.token, result => {
		Todo.findById(req.params.id, (err, todo) => {
			if(err) {
				res.send(err)
			} else {
				if(todo.creator == result.id) {

					todo.task = req.body.task;
					todo.complete = req.body.complete;
					todo.date_todo = req.body.date_todo;
					todo.tags = req.body.tags;

					todo.save((err, todo_updated) => {
						if(err) {
							res.send(err)
						} else {
							res.send(todo_updated)
						}
					})
				} else {
					res.send(todo)
				}
			}
		})
	})
}

function completed (req, res) {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			res.send(err)
		} else {
			todo.complete = req.body.complete;
			todo.save((err, completed_todo) => {
				if (err) {
					res.send(err)
				} else {
					res.send(completed_todo)
				}
			})
		}
	})
}

function removeOneTodo (req, res) {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			res.send(err)
		} else {
			Todo.remove({_id: todo._id}, (err, todo) => {
				if (err) {
					res.send(err)
				} else {
					res.send(todo)
				}
			})
		}
	})
}

module.exports = {
	findAllTodos,
	createTodo,
	findOneTodo,
	updateTodo,
	completed,
	removeOneTodo
}