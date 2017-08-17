const User = require('../models/User');
var jwt = require('jsonwebtoken');
require('dotenv').config();

function authUser (req, res, next) {
	var token = req.body.token;
	jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
		res.send(decoded)
	})
}

function allUSer (req, res, next) {
	jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
		if (decoded) {
			req.body.token = token;
			next()
		} else {
			res.send(err)
		}
	})
}

module.exports = {
	authUser,
	allUSer
}