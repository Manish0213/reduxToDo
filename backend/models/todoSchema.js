const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Tasks = mongoose.model('Tasks', todoSchema);

module.exports = Tasks;