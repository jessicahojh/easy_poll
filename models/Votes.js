const mongoose = require('mongoose');

const VoteSchema = mongoose.Schema({
    userId: {type: String, required: true},
    questionId: {type: String, required: true},
    optionId: {type: String, required: true}
});

module.exports = mongoose.model('user', VoteSchema);
