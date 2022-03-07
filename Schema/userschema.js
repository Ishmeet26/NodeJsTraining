var mongoose = require('mongoose');

// var schema = mongoose.Schema;
var userSchema = new mongoose.Schema({

    name: String,
    age: Number,

});

module.exports = mongoose.model("user" , userSchema)


