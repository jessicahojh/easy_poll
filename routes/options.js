const express = require('express');
const router = express.Router();

const Options = require('../models/Options');

// @route   GET /optionss
// @desc    Get all options
// @access  Public

router.get('/', (req, res) => {
    Options.find({})
    .then(options => res.json(options))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route   POST /options
// @desc    Add new option
// @access  Public
router.post('/add', async (req, res) => {

    try {

    const option = req.body.option;
    const votes = []

    const newOption = new Options({
        option,
        votes 
      });

    await newOption.save()
    .then(res.json(newOption))

    console.log("LOOK HERE", newOption)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;