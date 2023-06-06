import React, { useState } from 'react'
import '../TodoEdit/todoedit.css'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { API_TODO, BASE_URL } from '../../utils/Utils'
import { fetchApi, postApi } from '../../utils/api'

const TodoEdit = ({ setIsEditing, editingIndex, editingTodo, setEditingTodo, setTodoList }) => {
  // const [edit, setEdit] = useState('')
  // console.log(edit,"==edit");
  const handleChangeEdit = (event) => {
    // const {...editingTodo,event.target.value}
    const value = event.target.value
    setEditingTodo({ input: value ,isDone:false})
  }

  const saveEdit = async (editingIndex) => {

    if (editingTodo.input) {
      const trimmedInput = editingTodo.input.replace(/\s+/g, " "); // replace used for removing whitespace between words
      // const todos=JSON.parse(localStorage.getItem("todos"))
      // console.log(todos,"==todos");

      // let updatedTodo = todos[editingIndex].input= editingTodo.input

      // updatedTodo = [...todos]
      // let updatedTodo= todos.map((todo,index)=>editingIndex===index?{input:editingTodo.input,isDone:false}:todo)
      // console.log(updatedTodo,'==updatedTodo');
    

        const response = await postApi("put", {
          editingTodo:{input:trimmedInput,isDone:false},
          // editingTodo,
          editingIndex
        })

        setTodoList(response.data.result)

      //  localStorage.setItem("todos",JSON.stringify(updatedTodo))
      setIsEditing(false)
    }
  }
  const cancelEdit = () => {
    setIsEditing(false)
  }
  // console.log(edit,"==edit");
  return (
    <div className='todoedit'>
      <Input handleChangeEdit={handleChangeEdit} name='edit' editingTodo={editingTodo} />
      <Button text="SAVE" name='save' saveEdit={() => saveEdit(editingIndex)} />
      <Button text="CANCEL" name='cancel' cancelEdit={cancelEdit} />
    </div>
  )
}

export default TodoEdit
