var mongoose = require('mongoose');
// var ObjectId = Schema.ObjectId;
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({
  // id: ObjectId,
  first_name: {type: String, required: true, lowercase: true},
  last_name: {type: String, required: true, lowercase: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: {type: String, required: true, lowercase: true}
  // confirm: {type: String, required: true, lowercase: true}
});

userSchema.pre('save', function(next){
  var user = this;
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
