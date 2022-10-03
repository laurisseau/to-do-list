const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require("./routes/todoRoute.js")

const app = express()

//connect to mongodb
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// recieve req
app.use(express.json())

// routes
app.use(todoRoute)

// server config
app.listen(3000, ()=> console.log("running on port 3000..."))

