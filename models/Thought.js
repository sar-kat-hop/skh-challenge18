const mongoose = require('mongoose');

const snapiSchema = new mongoose.Schema({
});

const User = mongoose.model('Thought', snapiSchema);

const errHandler = (err) => console.error(err);

// Thought.create(
//     {

//     }
// );

//include Reaction (schema only) as subdoc

module.exports = Thought;