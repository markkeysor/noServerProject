//// DEPENDECIES /////
 var express = require('express');
 var bodyParser = require('body-parser');
 var cors = require('cors');
 var mongoose = require('mongoose');

//// CONTROLLERS //////
var UserCtrl = require('./controllers/userController');

///// MIDDLEWARE /////
var port = 3333;
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

///// ENDPOINTS /////
app.post('/user', UserCtrl.create);
app.get('/user', UserCtrl.read);
app.put('/user/:id', UserCtrl.update);
app.delete('/user/:id', UserCtrl.delete);


/////// CONNECTIONS ////////
var mongoUri = 'mongodb://localhost:27017/maggslashes';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});


app.listen(port, function(){
	console.log("listening on "+ port);
});
