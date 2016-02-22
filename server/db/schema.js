var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cushion');

var TechieSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Techie', TechieSchema);
