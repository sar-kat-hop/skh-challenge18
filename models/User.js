const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: { type: Schema.ObjectId },
        username: { String, unique: true, required: true, trim: true },
        email: { String, unique: true, required: true }, //add validation
        referrals: [
            {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
            type: mongoose.Schema.Types.ObjectId, ref: 'Thought'
            }
        ]
        // thoughts: {}, //array of _id values referencing Thought model
        // friends: {}, //array of_id values referencing User model (self-reference)
    },
    //will probably want to use virtuals for thoughts
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//TODO: add virtual for thoughts per user

const User = mongoose.model('User', userSchema);

const errHandler = (err) => console.error(err);

// User.create(
//     {

//     }
// );

module.exports = User;