const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        _id: { type: Schema.ObjectID },
        thoughtContent: { String, required: true }, //add validation for length between 1 - 280 chars
        createdAt: { Date, default: Date.now },
        username: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        reactions: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Thought' }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//TODO: add virtual for reactionCount

const Thought = mongoose.model('Thought', thoughtSchema);

const errHandler = (err) => console.error(err);

// Thought.create(
//     {

//     }
// );

//include Reaction (schema only) as subdoc

module.exports = Thought;