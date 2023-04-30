const router = require('express').Router();

//TODO: double check these are named correctly 
const {
    getThoughts,
    getOneThought,
    updateThought, //PUT
    createThought, //POST
    deleteThought, //DELETE
    addReaction, //new reaction
    deleteReaction // delete reaction
} = require('../../controllers/thoughtController.js');

// get all thoughts
router.route('/')
    .get(getThoughts);

// get, put (update), delete one thought
router.route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

// create new thought
// does it need to be router.route('/:userId')?
router.route('/')
    .post(createThought)

// create new reaction
router.route('/:thoughtId/reactions/:reactionId')
    .post(addReaction);

// delete reaction
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
    

module.exports = router;