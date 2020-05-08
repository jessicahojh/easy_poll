const express = require('express');
const router = express.Router();

const Options = require('../models/Options');
const Questions = require('../models/Options');

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

router.post('/addVote', async (req, res) => {
    const optionId = req.body[0].optionId;
    const voteRes = req.body[1];
    const index = req.body[2];

    console.log("CHECKING", optionId, voteRes, index)

    const voteAdd = await Options.findOneAndUpdate(
        { _id: optionId },
        { $push: {votes: voteRes}}
    );

    await voteAdd.save()
    .then(res.json('Vote added to an option!'))

    // the above only added vote to option
    // need to also update whole option in question object 

    // doesn't work -----start-----

    // const updatedOptionObj = await Options.find({ _id: optionId })

    // console.log("found id", updatedOptionObj)

    // const updateQuestion = await Questions.findOneAndUpdate(
    //     {"options[index]._id": optionId},
    //     {"options[index]": updatedOptionObj}
    // )

    // console.log("UPDATEQUESTION", updateQuestion)

    // await updateQuestion.save

    // ----------------end-----------

    // .then(res.json('Option obj updated in Question obj!'))
});

module.exports = router;