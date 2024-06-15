const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { renderToString } = require('react-dom/server');

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;