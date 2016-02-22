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

<<<<<<< HEAD
=======
Techie.remove({});
Techie.create(fakeData);

>>>>>>> 72a93b2d1129abfbfce1536faf29cbbe27f0c71a
module.exports.Techie = Techie;
