const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema({
    option: {type: String, required: true}
});

module.exports = mongoose.model('user', OptionSchema);