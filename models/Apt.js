var mongoose = require('mongoose');

var aptSchema = new mongoose.Schema({
  title: {type: String},
  start: {type: String},
  end: {type: String}
  // confirm: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('Apt', aptSchema);
