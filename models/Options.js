const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema({
    option: {type: String, required: true},
    votes: {type: Array, required: true}
});

module.exports = mongoose.model('option', OptionSchema);