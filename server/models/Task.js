"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
