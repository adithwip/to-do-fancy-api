"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
		type: String,
		required: [true, 'Nama harus diisi']
	},
	username: {
		type: String,
		required: [true, 'Username harus diisi']
	},
	password: {
		type: String,
		required: [true, 'Password harus diisi']
	},
	email: {
		type: String,
		required: [true, 'Email harus diisi']
	},
	user_id_fb: {
		type: String
	},
	salt: {
		type: String
	}
}, {
	timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;
