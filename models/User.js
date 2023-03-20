const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: { type: Schema.ObjectId },
        username: { String, unique: true, required: true, trim: true },
        email: { String, unique: true, required: true }, //add validation
        thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought'}], //array of _id values referencing Thought model
        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //array of_id values referencing User model (self-reference)
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//TODO: add virtual for friendCount retrieving length of user's friends array on query

const User = mongoose.model('User', userSchema);

const errHandler = (err) => console.error(err);

// User.create(
//     {

//     }
// );

module.exports = User;