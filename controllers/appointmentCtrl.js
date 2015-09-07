var Apt = require('../models/Apt');

module.exports = {

  create: function(req, res) {
    console.log(req.body)
    var newApt = new Apt(req.body);
    newApt.save(function(err, result) {
      if (!err) {
        res.send(result);
      }
        return res.status(500).send(err);
    });
  },

  read: function(req, res) {
    Apt.find(req.query)
    .populate('user')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    Apt.findByIdAndUpdate(
      req.params.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  },

  delete: function(req, res) {
    Apt.findByIdAndRemove(
      req.params.id,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  }

};
