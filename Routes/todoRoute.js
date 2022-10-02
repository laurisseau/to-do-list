const router = require("express").Router()
const Todo = require('../Models/todoModel.js')

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


module.exports = router