const Thought = require('../models/Thought');
// const User = require('../models/User'); //may be unnecessary

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId}) //not sure about params syntax
            .then((thought) => {
                !thought 
                    ? res.status(404).json({message:'thought not found'})
                    : res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(_id, {
            thoughtText: '',
            // createdAt: new Date()
        },
        {
            new: true,
        })
            .then((updatedThought) => {
                if(!updatedThought) {
                    console.log('Error: Thought not updated');
                    return;
                }

                console.log(updatedThought);
            })
            .catch((error) => console.error(error));
    },
    createThought(req, res) {
        const newThought = new Thought({
            thoughtText: '',
            createdAt: new Date(),
            username: '',
        });

        newThought.save()
            .then((savedThought) => {
                console.log(savedThought);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    removeThought(req, res) {

    },
    addReaction(req, res) {

    },
    removeReaction(req, res) {

    }
}