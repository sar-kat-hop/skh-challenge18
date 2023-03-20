const mongoose = require('mongoose');

const snapiSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trimmed: true }, //need to check syntax
    email: { type: String, required: true, unique: true,}, //add validation
    // thoughts: {},
    // friends: {},
});

const User = mongoose.model('User', snapiSchema);

const errHandler = (err) => console.error(err);

// User.create(
//     {

//     }
// );

module.exports = User;