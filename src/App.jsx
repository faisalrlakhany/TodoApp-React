
import './App.css'

import {useState} from 'react'

function App() {
  

  const [todo , setTodo] = useState('')
  const [content , setContent] = useState('')

  function addTodo(event){

    console.log("button click");
    event.preventDefault();
    console.log(todo);
    console.log(content);
    
    setTodo('')
    setContent('')
  }

  return(

    <>

      <h1>TODO APP</h1>

      <form 
      onSubmit={addTodo}
      >

       <input
        type="text"
        onChange={(e)=>{setTodo(e.target.value)}} 
        value={todo}   
        placeholder="Enter Todo" 
        />

        <br/>
        <br/>

        <input 
        type="text" 
        onChange={(e)=>{setContent(e.target.value)}} 
        value={content} 
        placeholder="Enter Content"  
        />

        <br/>
        <br/>
    
        <button>Add</button>

      </form>
    </>

  )
}

export default App