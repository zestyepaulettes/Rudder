/* This file states the app to losten at port 8000. 
The file handles all requests to database. 
-The get requets from '/api/techie', looks for all techies stored
 in database and returns them as a response. 
-The post requests handles creating and adding a new techie to the database.
-The get requests from '/api/techie/:techieType' finds techies who have a specific skill(tecietype) 
 and returns a list of all those techies. */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');
var methodOverride = require('method-override');
var session = require('express-session');
var keys = require('./keys.js');

var db = require('./db/schema');


var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(methodOverride());
app.use(session({secret: 'heineken'}));
app.use(express.static(__dirname +  '/../client'));
app.use(passport.session());


//start serializing for passport
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: keys.GITHUB_CLIENT_ID,
    clientSecret: keys.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/#/signup');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//middleware function that ensures authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/#/login');
}

function restrict(req, res, next){
  if(req.session.user){
    next()
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}


//sends to homepage
app.get('/', ensureAuthenticated, function(req, res) {
  console.log('dirname:',__dirname);
 // res.sendFile(__dirname + '/');
});

app.get('/api/techie', function(req,res) {
  db.Techie.find({}, function(err, techies) {
    if(err) {
      res.send(404);
    } else {
      res.status(200).send(techies);
    }
  });
});

app.get('/api/techie/:techieType', function(req,res) {
  var techieType;
  if(req.query.techieType === 'sell'){
    techieType = 'interactiveSites';
  } else if (req.query.techieType === 'upgrade'){
    techieType = 'graphics';
  } else if (req.query.techieType === 'advertise'){
    techieType = 'staticSite';
  } else if (req.query.techieType === 'customizedWebsite'){
    techieType = 'fullStackBeast';
  }
  var query = {};
  query[techieType] = true;
  db.Techie.find(query, function(err, techies) {
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
});

var port = 8000;
app.listen(8000);

console.log('Server listening on...', port);

module.exports = app;
