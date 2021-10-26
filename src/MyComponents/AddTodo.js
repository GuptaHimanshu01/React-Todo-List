import React,{ useState } from 'react';

export const AddTodo = (props) => {
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title){
            alert("Title can't be blank");
        }
        else{
        props.addTodo(title,desc); 
        setTitle("");
        setDesc("");
        }
    }
        
    
    return (
        <div >
            
            <form onSubmit={submit} className="Add-Todo-Form">
                <div className="add-todo">
                    <label className="form-label"> Add Todo </label>
                    <br></br>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="todo-input"  placeholder="Title"/>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="todo-desc"  placeholder="Description"/>
                </div>
                
                <button className="addbutton" type="submit">+</button> 
            </form>
        </div>
    )
}
