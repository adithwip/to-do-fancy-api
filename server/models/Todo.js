"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  task: {
    type: String,
    required: [true, 'Tidak boleh kosong']
	},
	date_todo: {
		type: Date
	},
  complete: {
    type: Boolean
	},
	tags: [{
		type: String
	}],
	creator: {
		type: Schema.Types.ObjectId, ref: 'User'
	}
}, {
  timestamps: true
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
