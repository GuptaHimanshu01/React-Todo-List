import React from 'react'

export const Todos = ({todos, onDelete}) => {
    return (
        
        <div className="Container">
            
             <h3 id="todotitle">{todos.title}</h3>
             <p id="tododesc">{todos.desc}</p>  
             <button className="buttondanger" onClick={()=>onDelete(todos)}>Delete</button>
             
         </div>
        
    )
}
