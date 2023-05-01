const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.id }) //not sure about params syntax
            .then((thought) => {
                // console.log(thought);
                !thought 
                    ? res.status(404).json({message: `could not find thought with id ${req.params.id}`})
                    : res.json(thought)
            })
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body },
            { new: true },
        )
        .then((updatedThought) => 
            !updatedThought
            ? res.status(400).json({ message: `could not update thought; thought not found with id ${req.params.id}`})
            : res.json(updatedThought)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
                res.status(200).json({ message: `created new thought with id ${thought._id}`});
                return;
            })
            .then((userThought) => 
                !userThought
                    ? res.status(400).json({ message: `userId and thought_.id mismatch: user ${req.body.userId} does not appear to own ${req.body.id}`})
                    : res.json(userThought)
            )
            .catch((err) => res.status(400).json(err));
            console.log(`userId: ${req.body.userId}, thoughtId: ${req.body.id}`);
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
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
            { $push: { reactions: req.body } }, //note to self: $addToSet causes a server parsing error, returns array with modified element(s) as opposed to the modified array itself
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(400).json({ message: 'Thought not found' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        const thoughtId = req.params.thoughtId;
        const reactionId = req.params.reactionId;

        console.log(`\n thoughtId (req.params.thoughtId): ${thoughtId}, \n reactionId: ${reactionId}`)

        Thought.findOneAndUpdate(
            {_id: thoughtId },
            { $pull: { reactions: { _id: reactionId } } },
            { new: true, runValidators: true }
        )
            .then((updatedThought) => {
                // console.log('\n Updated thought: ' + updatedThought);

                if(!updatedThought) {
                    return res.status(400).json({ message: 'Thought not found' });
                }

                res.status(200).json(updatedThought);
            })
            .catch((err) => {
                console.log('\n Error: could not find and update thought: ' + err + '\n');

                res.status(500).json({ message: 'Could not find and update thought.'})
            });
    }   
};
    //currently not working
    // deleteReaction(req, res) {
    //     Thought.findOneAndUpdate(
    //         { _id: req.params.thoughtId },
    //         { $pull: { reactions: { _id: reactionId } } },
    //         { new: true }
    //     )

    //     console.log('thought: ' + thought);
    //     console.log('req.params.thoughtId' + req.params.thoughtId);
    //     console.log('reactionId?' + reactionId);
        
        // .then((thought) =>
        //         !thought
        //             ? res.status(400).json({ message: 'There is no thought with that id.' })
        //             : res.json(thought)
        //     )
        //     .catch((err) => res.status(500).json(err));
    // }
