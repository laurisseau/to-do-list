const router = require("express").Router()
const Todo = require('../Models/todoModel.js')

router.get("/read/todo", async(req, res) =>{
    
    try{

        const readTodo = await Todo.find()

        res.status(201).json({

            status: 'success',
            data:{
                readTodo
            }

        })

    }catch(err){
        
        console.log(err)

    }

})

router.post("/add/todo", async(req, res) =>{
    
    try{

        const createTodo = await Todo.create(req.body)

        res.status(201).json({
            status: 'success',
            data:{
                createTodo
            }
        })

    }catch(err){
        
        console.log(err)

    }

})

router.delete("/delete/todo/:id", async(req, res) =>{
    
    try{

        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)

        res.status(201).json({

            status: 'success'

        })

    }catch(err){
        
        console.log(err)

    }

})

module.exports = router
