var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cushion');

var TechieSchema = new mongoose.Schema({
  useranme: {type: String, unique: true},
  password: String,
  email: String,
  phonenum: Number,
  bio: String,
  mobileApp: Boolean,
  graphics: Boolean,
  staticSite: Boolean,
  interactiveSites: Boolean,
  fullStackBeasts: Boolean
});

module.exports = mongoose.model('Techie', TechieSchema);