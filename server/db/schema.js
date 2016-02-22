var mongoose = require('mongoose');

var fakeData = require('./fakeData');

mongoose.connect('mongodb://localhost/cushion');

var techieSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  name: String,
  email: String,
  phoneNum: Number,
  bio: String,
  mobileApp: Boolean,
  graphics: Boolean,
  staticSite: Boolean,
  interactiveSites: Boolean,
  fullStackBeast: Boolean
});

var Techie = mongoose.model('Techie', techieSchema);

module.exports.Techie = Techie;
