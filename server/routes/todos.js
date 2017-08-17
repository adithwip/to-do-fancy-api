var express = require('express');
var router = express.Router();

var auth = require('../controllers/authController');
var todoCont = require('../controllers/todoController');

router.post('/', todoCont.findAllTodos);

router.post('/', auth.allUSer, todoCont.createTodo);

router.post('/add', todoCont.createTodo);

router.get('/:id', auth.allUSer, todoCont.findOneTodo);

router.put('/:id', todoCont.updateTodo);

router.put('/:id/completed', todoCont.completed);

router.delete('/:id', todoCont.removeOneTodo);

module.exports = router;