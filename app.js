const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require("./routes/todoRoute.js")

const app = express()

//connect to mongodb
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// routes
app.use(todoRoute)

// server config
app.listen(3000, ()=> console.log("working..."))

