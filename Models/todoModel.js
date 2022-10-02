const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

    todo:{
        type: String,
        required: [true, 'A to-do is required']
    }

})


const Todo = mongoose.model('Todo', TodoSchema )

module.exports = Todo;