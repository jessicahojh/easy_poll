const express = require('express');
const router = express.Router();

const Options = require('../models/Options');

// @route   GET /options
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


// @route   UPDATE /options
// @desc    Get option to add vote 
// @access  Public

router.put('/addVote', async (req, res) => {
    const optionId = req.body[0];
    const voteRes = req.body[1];

    console.log("CHECKING", optionId, voteRes)

    // const voteAdd = await Options.findOneAndUpdate(
    //     { _id: optionId },
    //     { $push: {votes: voteRes}}
    // );

    // await voteAdd.save
    // .then(res.json('Vote added to an option!'))
});

module.exports = router;