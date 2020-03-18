const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    userId: {type: String, required: true},
    question: {type: String, required: true},
    option1Id: {type: String, required: true},
    option2Id: {type: String, required: true}
});

module.exports = mongoose.model('user', QuestionSchema);
