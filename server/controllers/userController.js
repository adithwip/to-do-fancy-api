"use strict"
var User = require('../models/User');

function findAllUsers (req, res) {
	User.find()
	.then(users_data => {
		res.send(users_data)
	})
	.catch(err => {
		res.send(err)
	})
}

function findOneUser (req, res) {
	User.find({
		_id: req.params.id
	})
	.then(user_data => {
		res.send(user_data)
	})
	.catch(err => {
		res.send(err)
	})
}

function updateUser (req, res) {
	User.update({
		_id: req.params.id
	}, {
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	})
	.then(updated_user => {
		res.send(updated_user)
	})
	.catch(err => {
		res.send(err)
	})
}

function removeUser (req, res) {
	User.deleteOne({
		_id: req.params.id
	})
	.then(result => {
		res.send(result)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports = {
	findAllUsers,
	findOneUser,
	updateUser,
	removeUser
}