// const mongoose = require('mongoose');
const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        // _id: { type: Schema.ObjectId },
        username: { 
            type: String, 
            unique: true, 
            required: true, 
            trim: true 
        },
        email: { 
            type: String, 
            unique: true, 
            required: true,
            // TODO: add validation regex (match: regex)
        },
        thoughts: [
            { type: Types.ObjectId, ref: 'Thought'} //array of _id values referencing Thought model
        ], 
        friends: [
            { type: Types.ObjectId, ref: 'User'} //array of_id values referencing User model (self-reference)
        ], 
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//TODO: add virtual for friendCount retrieving length of user's friends array on query

const User = model('User', userSchema);

module.exports = User;