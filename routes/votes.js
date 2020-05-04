const express = require('express');
const router = express.Router();

const Votes = require('../models/Votes');

// @route   GET /votes
// @desc    Get all votes
// @access  Public

router.get('/', (req, res) => {
    Votes.find({})
    .then(votes => res.json(votes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /votes
// @desc    Add new vote
// @access  Public
router.post('/add', async (req, res) => {

    try {

    console.log("REQ BODY", req.body)

    const userId = req.body[0].userId;
    const optionId = req.body[1].optionId;
    const questionId = req.body[2].questionId;

    console.log("VOTE REQ", userId, optionId, questionId)

    const newVote = new Votes({
        userId,
        optionId,
        questionId
      });

    await newVote.save()
    .then(res.json(newVote))

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;