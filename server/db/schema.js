var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cushion');

var TechieSchema = new mongoose.Schema({
            userName: {type: String, unique: true},
            password: String,
            Name: String,
            email: String,
            phoneNo: Number,
            Bio: String,
            mobileApp: Boolean,
            graphics: Boolean,
            staticSite: Boolean,
            interactiveSites: Boolean,
            fullStackBeasts: Boolean
});

module.exports = mongoose.model('Techie', TechieSchema);