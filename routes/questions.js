const express = require('express');
const router = express.Router();

const Questions = require('../models/Questions');

// @route   GET /questions
// @desc    Get all questions
// @access  Public

router.get('/', (req, res) => {
    res.send("Get all questions");
});

// @route   POST /questions
// @desc    Add new question
// @access  Public
router.post('/add', async (req, res) => {

    try {

    const userId = req.body.userId;
    const question = req.body.question;
    const optionA = req.body.optionA;
    const optionB = req.body.optionB;

    const newQuestion = new Questions({
        userId,
        question,
        optionA,
        optionB
      });

    await newQuestion.save()
    .then(res.json('Question added!'))

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /questions
// @desc    Delete question
// @access  Public

router.delete('/delete', (req, res) => {
    res.send("Delete question");
});

module.exports = router;