import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/variables.css'
import './todolist.css'
import TodoEdit from '../TodoEdit/TodoEdit'
import { postApi } from '../../utils/api'

const TodoList = ({ setTodoList,todoList }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null)
    const [editingTodo, setEditingTodo] = useState({})
    
    // const todoList1 = []
    // console.log(todoList1, "==todolist1");

    const editTodo = (index, todo) => {
        setIsEditing(true)
        setEditingIndex(index)
        //    const td=todoList1[index]
        // console.log(td,"==title");
        setEditingTodo(todo)
    }
    // console.log(editingTodo, "==editingTodo");

    const deleteTodo = async(index) => {
        // const filteredTodo = todoList?.filter((todo, todoIndex) => todoIndex !== index)
        // console.log(filteredTodo, "==filteredTodo");
        // localStorage.setItem("todos",JSON.stringify(filteredTodo))
        const response=await postApi("delete",{editingIndex:index})
        setTodoList(response.data.result)
    }

    const completedTodo = async (editingIndex,todo)=>{
        // const todoItem=todoList1.map((todo,todoIndex)=>(todoIndex===index)?{...todo,isDone:true}:todo)
        // console.log(todoItem,"==todoitem");
        // setTodoList(todoItem)
        // localStorage.setItem("todos",JSON.stringify(todoItem))
         const editingTodo ={...todo,isDone:true}
        const response=await postApi("put",{
            editingTodo,
            editingIndex
        })
        setTodoList(response.data.result)

    }

    return (
        <Fragment>

            {
                // (todoList1) &&
              todoList &&  todoList?.map((todo, index) => (
                    <Fragment key={index}>

                        {isEditing && editingIndex === index ?
                            <div className="edit">
                                <TodoEdit setIsEditing={setIsEditing} editingIndex={editingIndex} editingTodo={editingTodo} setEditingTodo={setEditingTodo} setTodoList={setTodoList} />
                            </div>


                            : <div className={`todolist`} >
                                <p onClick={()=>completedTodo(index,todo)} className={todo.isDone ?'complete':''}>{todo.input}</p>
                                <div className="cta">
                                    <span className='pencil' onClick={() => editTodo(index, todo)}></span>
                                    <span className='delete' onClick={() => deleteTodo(index)}></span>
                                </div>

                            </div>}

                    </Fragment>

                ))


            }

            {/* <TodoEdit /> */}
        </Fragment>
    )
}

export default TodoList