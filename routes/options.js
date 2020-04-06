const express = require('express');
const router = express.Router();

// import { useSelector } from 'react-redux';

const Options = require('../models/Options');
const Questions = require('../models/Questions');



// @route   GET /optionss
// @desc    Get all options
// @access  Public

router.get('/', (req, res) => {
    res.send("Get all options");
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
    .then(res.json(newOption._id))

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;