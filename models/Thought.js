const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId },
        thoughtText: { String, required: true, minLength: 1, maxLength: 280 }, 
        createdAt: { Date, default: Date.now },
        username: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        // reactions: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Thought' }],
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const reactionSchema = new mongoose.Schema({
    reactionId: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    // reactionText: { type: mongoose.Schema.Types.ObjectID, ref: 'Thought'},
    reactionText: { String, required: true, maxLength: 280 },
    // username: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    username: { String, required: true },
    createdAt: { Date, default: Date.now }
})

//TODO: add virtual for reactionCount retrieving length of thought's reactions array on query

const Thought = mongoose.model('Thought', thoughtSchema);

const errHandler = (err) => console.error(err);

// Thought.create(
//     {

//     }
// );

//include Reaction (schema only) as subdoc

module.exports = Thought;