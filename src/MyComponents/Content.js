import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Todos} from './Todos'

export default function Content(props) {
    return (
        <div>
        <Header title="My TodoList"/>
        <div className="App-content">
        
        <container className = "mainContainer">
        {props.todos.length===0? "No todo task to display":
        props.todos.map((todo)=>{
            
            return (
                <Todos todos={todo} onDelete={props.onDelete}/>
            )
        })} 
        
        </container>
        <Footer/>
        </div>
        </div>
    )
}
