// const mongoose = require('mongoose');
const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        // _id: { type: ObjectId },
        thoughtText: { 
            type: String, 
            required: true, 
            minLength: 1, 
            maxLength: 280 
        }, 
        createdAt: { 
            type: Date, 
            default: Date.now, 
        },
        username: { 
            type: String, 
            required: true 
        },
        userId: { 
            type: String, 
            required: true 
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//include Reaction (schema only) as subdoc
const reactionSchema = new Schema(
    {
        reactionId: { 
            type: ObjectId, 
            default: new Types.ObjectId()
        },
        reactionText: { 
            type: String, 
            required: true, 
            maxLength: 280 
        },
        username: { 
            type: String, 
            required: true 
        },
        createdAt: { 
            type: Date, 
            default: Date.now,
        },
    }
);

//TODO: add virtual for reactionCount retrieving length of thought's reactions array on query

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;