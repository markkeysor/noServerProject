var mongoose = require('mongoose');

var aptSchema = new mongoose.Schema({
  // user: {type: mongoose.ObjectId, ref: 'user'}
  title: {type: String},
  start: {type: String},
  end: {type: String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  // confirm: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('Apt', aptSchema);
