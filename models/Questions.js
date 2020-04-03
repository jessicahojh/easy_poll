const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    question: {type: String, required: true},
    options: {type: Array, required: true}
    // optionA: {type: String, required: true},
    // optionB: {type: String, required: true}
});

module.exports = mongoose.model('question', QuestionSchema);