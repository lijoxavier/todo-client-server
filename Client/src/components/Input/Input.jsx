import React from 'react'
import './input.css'
import '../../styles/variables.css'

const Input = ({name,handleChange,handleChangeEdit,editingTodo}) => {
  // console.log(name,"==name");
  return (
   <section className='todo-input'>
    
    {
     (name==='add')?<input type="text" placeholder='New Todo' onChange={handleChange} name={name}  />:
      (name==='edit')&& <input type="text" placeholder='New Todo' onChange={handleChangeEdit} name={name} value={editingTodo.input} />

    }
    
    

   </section>
  )
}

export default Input