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

    const user = req.body.userId;

    const newVote = new Votes({
        userId: user
      });

    await newVote.save()
    .then(res.json('Vote added!'))

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;