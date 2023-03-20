const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    updateThought, //PUT
    createThought, //POST
    removeThought, //DELETE
    addReaction, //new reaction
    removeReaction // delete reaction
} = require('../../controllers/thoughtController.js');

// get all thoughts
router.route('/api/thoughts').get(getThoughts);

// get one thought

// update thought

// create new thought

// delete thought

// create new reaction

// delete reaction