var mongoose = require('mongoose');

var aptSchema = new mongoose.Schema({
  service: {type: String, lowercase: true},
  date: {type: String, lowercase: true},
  time: {type: String, lowercase: true},
  email: {type: String, lowercase: true},
  length: {type: String, lowercase: true}
  // confirm: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('Apt', aptSchema);
