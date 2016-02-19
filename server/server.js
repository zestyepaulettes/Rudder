var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(_dirname + '/../../client'));

app.get('/getTechies', function(req,res) {
  db.find({req.body.x: true}, function(err, techie) {
    if(err) {
      res.send(404);
    } else {
      res.send(200, techie);
    }
  });
});

app.listen(8000);

module.exports = app;

