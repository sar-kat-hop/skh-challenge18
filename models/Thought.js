// const mongoose = require('mongoose');
const { Schema, Types, model } = require('mongoose');

//include Reaction (schema only) as subdoc
const reactionSchema = new Schema(
    {
        reactionId: { 
            type: Types.ObjectId, 
            default: () => new Types.ObjectId()
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

const thoughtSchema = new Schema(
    {
        // _id: { type: ObjectId }, //no need to include this: mongoose will auto generate with id: false
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
            required: false 
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

//TODO: add virtual for reactionCount retrieving length of thought's reactions array on query

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
const Reaction = model('Reaction', reactionSchema);

module.exports = Thought;