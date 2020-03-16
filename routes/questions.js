const express = require('express');
const router = express.Router();

// @route   GET api/questions
// @desc    Get all questions
// @access  Public
router.get('/', (req, res) => {
    res.send("Get all questions");
});

// @route   POST api/questions
// @desc    Add new question
// @access  Public
router.post('/', (req, res) => {
    res.send("Add question");
});

// @route   PUT api/questions
// @desc    Update question
// @access  Public
router.put('/:id', (req, res) => {
    res.send("Update question");
});

// @route   DELETE api/questions
// @desc    Delete question
// @access  Public
router.delete('/:id', (req, res) => {
    res.send("Delete question");
});

module.exports = router;