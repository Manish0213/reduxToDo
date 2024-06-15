const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const todoSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Tasks = mongoose.model('Tasks', todoSchema);

module.exports = Tasks;