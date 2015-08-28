var mongoose = require('mongoose');

var aptSchema = new mongoose.Schema({
  title: {type: String, lowercase: true},
  start: {type: String, lowercase: true},
  end: {type: String, lowercase: true},
  // confirm: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('Apt', aptSchema);
