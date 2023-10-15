const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo', toDoSchema)