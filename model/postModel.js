const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    caption: String,
    image: String,

});

module.exports = mongoose.model('Post', postSchema);