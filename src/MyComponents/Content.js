import React from 'react'
import {AddTodo} from './AddTodo'
import Footer from './Footer'
import Header from './Header'
import {Todos} from './Todos'


export default function Content(props) {
    return (
        <div id="body">
        <Header title="My TodoList"/>
        <div className="App-content">
        
        <div className = "mainContainer">
        <AddTodo addTodo={props.addTodo}/>
        <div className="alltodos">
        {props.todos.length===0? <div className="NoTodo"><hr/>No todo task to display</div>:
        props.todos.map((todo)=>{
            
            return (
                <Todos todos={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
        })} 
        </div>
        </div>
        <Footer/>
        </div>
        </div>
    )
}
