var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var db = require('./db/schema');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +  '/../client'));

app.get('/api/techie', function(req,res) {
  db.Techie.find({}, function(err, techies) {
    if(err) {
      res.send(404);
    } else {
      res.status(200).send(techies);
    }
  });
});

app.post('/api/techie', function(req, res){
  //make sure req.body has correct obj format
  db.Techie.create(req.body, function(err ,techie) {
    if(err) {
      res.send(404);
    } else {
      res.send(200, techie);
    }
  });
var port = 8000;
app.listen(8000);

console.log('Server listening on...', port);

module.exports = app;
