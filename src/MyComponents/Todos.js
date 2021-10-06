import React from 'react'

export const Todos = ({todos, onDelete}) => {
    return (
        
        <div className="Container">
             
             <h3>{todos.title}</h3>
             <p>{todos.desc}</p>  
             <button className="buttondanger" onClick={()=>onDelete(todos)}>Delete</button>
             
         </div>
        
    )
}
