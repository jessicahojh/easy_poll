const express = require('express');
const router = express.Router();

const Votes = require('../models/Votes');

// @route   GET /votes
// @desc    Get all votes
// @access  Public

router.get('/', (req, res) => {
    res.send("Get all votes");
});

// @route   POST /votes
// @desc    Add new vote
// @access  Public
router.post('/add', async (req, res) => {

    try {

    const userId = req.body.id;

    console.log("USER ID FOR VOTE", userId)

    const newVote = new Votes({
        userId
      });

    await newVote.save()
    .then(res.json(newVote))

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;