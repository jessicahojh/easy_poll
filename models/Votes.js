const mongoose = require('mongoose');

const VoteSchema = mongoose.Schema({
    userId: {type: String, required: true},
});

module.exports = mongoose.model('vote', VoteSchema);
