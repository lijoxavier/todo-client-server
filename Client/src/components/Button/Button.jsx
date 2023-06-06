import React, { Fragment } from 'react'
import './button.css'
import '../../styles/variables.css'


const Button = ({text,cancelEdit,name,saveEdit,addTodo}) => {
  return (
    <Fragment>
      {
        (name==='add') && <button onClick={addTodo}><p>{text}</p></button>
      }
   {
    (name==='save')&& <button onClick={saveEdit}>
           <p>{text}</p>
     </button>
     
  }
  {
        (name === 'cancel') && <button onClick={cancelEdit}>
          <p>{text}</p>
        </button>
  }
    </Fragment>
  )
}

export default Button