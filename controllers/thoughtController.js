const { User, Thought } = require('../models');

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
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { ...req.body },
            { new: true },
        )
        .then((result) => 
            !result
            ? res.status(400).json({ message: 'Could not update thought.'})
            : res.json(result)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((userThought) => 
                !userThought
                    ? res.status(400).json({ message: 'No user found with that id.'})
                    : res.json(userThought)
            )
            .catch((err) => res.status(400).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: thought.userId },
                    { $pull: { thoughts: thought._id } },
                );
        })
            .then(() => res.json({ message: "Thought has been deleted." }))
            .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(400).json({ message: 'There is no thought with that associated ID.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(400).json({ message: 'There is no thought with that associated ID.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
}