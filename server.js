//// DEPENDECIES /////
 var express = require('express');
 var bodyParser = require('body-parser');
 var cors = require('cors');
 var mongoose = require('mongoose');

 ///// MIDDLEWARE /////
  var port = 3333;
  var app = express();
  app.use(bodyParser.json());
  app.use(express.static('public'));

  var db = mongoose('maggsLash', ['clients']);

  ///// ENDPOINTS /////
  app.post('/api/clients', function(req, res) {
    db.products.insert(req.body, function(err, result){
      if(err) {
        res.status(500).json(err);
      } else {
        // console.log(req.body);
        res.json(result);
      }
    })
  });

  app.get('/api/clients', function(req, res) {
    db.products.find(req.query, function(err, result) {
      if(!err){
  			res.json(result);
  		} else {
  			res.status(500).json(err)
  		}
    })
  });

  app.delete('/api/clients', function(req, res){
  	db.products.remove(req.query, function(err, result){
  		if(!err){
  			res.status(418).json(result);
  		} else {
  			res.status(500).json(err);
  		}
  	});
  });

  app.put('/api/clients', function(req, res){
  	db.products.update(req.query, req.body, function(err, result){
  		if(err) res.status(500).json(err);
  		else res.json(result);
  	})
  });


  app.listen(port, function(){
  	console.log("listening on "+ port)
  });
