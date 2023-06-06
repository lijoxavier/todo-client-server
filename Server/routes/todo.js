const express = require('express')
const router = express.Router()

const todoList = []
router.get('/', (req, res) => {

    res.status(200).json({
        result: todoList
    })
})

router.post('/', (req, res) => {

    const { todo } = req.body
    // console.log(todo);

    todoList.push(todo)

    res.status(200).json({
        result: todoList
    })
    console.log(todoList);

})

router.put('/', (req, res, next) => {
    const { editingTodo,editingIndex } = req.body
    const { tdid } = req.params
    // if (!("todo" in req.body) || !("id" in req.body)) {
    // const required=["id", "todo"]
    const required = ["editingTodo","editingIndex"]
    const missingFields =
        required.filter((field) => !(field in req.body))


    console.log(missingFields);

    if (missingFields.length > 0) {

        const error = {
            status: 401,
            fields: {
                body: req.body,
                required: missingFields
            }
        }
        return next(error)
    }
    // }


    const item = todoList.find((todo,index) => index === editingIndex) ?? "item not found" // ?? null collaescing
   
    item.input = editingTodo.input
    item.isDone=editingTodo.isDone
    console.log(item, "==item");
    res.status(200).json({
        result: todoList
    })


})

router.delete('/', (req, res) => {
    const { editingIndex } = req.body
    console.log(editingIndex);
    const index = todoList.findIndex((todo,index) => index === editingIndex)
    console.log(index);
    todoList.splice(index, 1)
    // console.log(todoList,"==todolist");

    res.status(200).json({
        result: todoList
    })
})


module.exports = router