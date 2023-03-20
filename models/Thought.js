const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        _id: { type: Schema.ObjectID },
        content: { String, required: true }, //add validation for length between 1 - 280 chars
        createdAt: { Date, default: Date.now },
        username: { String, required: true },
        reactions: { }
    }
);

const Thought = mongoose.model('Thought', thoughtSchema);

const errHandler = (err) => console.error(err);

// Thought.create(
//     {

//     }
// );

//include Reaction (schema only) as subdoc

module.exports = Thought;