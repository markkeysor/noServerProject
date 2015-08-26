var Apt = require('../models/Apt');

module.exports = {

  create: function(req, res) {
    var newApt = new Apt(req.body);
    newApt.save(function(err, result) {
      if (err) {
        console.log(newApt);
        return res.status(418).send(err);
      } res.send(result);
    });
  },

  read: function(req, res) {
    Apt.find(req.query)
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
