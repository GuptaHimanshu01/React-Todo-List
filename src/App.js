
import React,{ useState } from 'react';
import './App.css';
import Content from './MyComponents/Content';


function App(props) {

  const onDelete = (todo)=>{
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
  {
    sno:1,
    title:"Learn DSA",
    desc: "Learn Data Strucutes and Algorithms"
  },
  {
    sno:2,
    title:"Learn DBMS",
    desc: "Learn Database Management Systems"
  },
  {
    sno:3,
    title:"Learn CN",
    desc: "Learn Computer Networks"
  }
  ])
  return (
    <Content todos={todos} onDelete={onDelete}/>
    
  );  
}

export default App;
