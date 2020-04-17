const express = require('express');
const router = express.Router();

const Questions = require('../models/Questions');

// @route   GET /questions
// @desc    Get all questions
// @access  Public

router.get('/', (req, res) => {
    Questions.find({})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /questions
// @desc    Add new question
// @access  Public
router.post('/add', async (req, res) => {

    try {

    const userId = req.body[0].userId;
    const question = req.body[0].question;
    const options = [req.body[1], req.body[2]]

    const newQuestion = new Questions({
        userId,
        question,
        options
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