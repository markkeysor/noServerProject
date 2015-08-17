var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  first_name: {type: String, required: true, lowercase: true},
  last_name: {type: String, required: true, lowercase: true},
  email: {type: String, required: true, lowercase: true},
  password: {type: String, required: true, lowercase: true},
  confirm: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('User', userSchema);
