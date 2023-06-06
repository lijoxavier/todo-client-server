import React, { useEffect, useState } from 'react'

// import {v4 as uuidv4} from 'uuid'

import '../TodoApp/todoapp.css'
import '../styles/variables.css'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import TodoList from './TodoList/TodoList'
import { API_TODO, BASE_URL } from '../utils/Utils'
import axios from 'axios'
import { fetchApi } from '../utils/api'

const TodoApp = () => {
  
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState('')
  // const[key,setKey]=useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const addTodo = async () => {
    if (input.trim()) {

      // const key=uuidv4()
      //  setKey(key)

      const todo2 = { input, isDone: false }
      // console.log(todo2,"==todo2");
      // setTodoList(todo2)
      //  setTodo((prev)=>{
      //   return  {
      //     ...prev,
      //     input
      //   }

      // })
      try {
        const response = await axios(BASE_URL+API_TODO, {
          method: 'post',
          data: {
            todo: todo2
          }

        })
        setTodoList(response.data.result)
        console.log(response.data.result);

      }
      catch (error) {
        console.log(error.message);
      }

      // localStorage.setItem("todos",JSON.stringify(todo2))
    }
  }
  console.log(todoList, "==todo");

  console.log(input);

  const fetchTodo = async () => {
    try {
      const response = await fetchApi()
      //  todoList1.push(response.data.result)
      setTodoList(response.data.result)

    }
    catch (error) {
      console.log(error.message);
    }

  }

  useEffect(() => {
    fetchTodo()

  }, [])

  return (
    <div className='container'>
      <h3>Todo List</h3>
      <div className="search">
        <Input handleChange={handleChange} name='add' />
        <Button text='ADD TODO' name='add' addTodo={addTodo} />
      </div>
      <TodoList setTodoList={setTodoList} todoList={todoList} />
      {/* input={input} key={key} setInput={setInput} */}
    </div>
  )
}

export default TodoApp