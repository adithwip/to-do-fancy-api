"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  salt: {
    type: String,
    required: true
  },
  task_list: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
