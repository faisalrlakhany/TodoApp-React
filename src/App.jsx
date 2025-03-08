
import React, { useRef, useState } from "react";
import "./App.css";

const TodoApp = () => {

  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState([]);

  function add(e) {

    e.preventDefault();
    console.log(title);
    setTitle('')
    if(title === ''){

      alert('Empty Todo')
      return
    }
    todo.push({
      title: title,
      id: Date.now()
    });
    console.log(todo);
    setTodo([...todo]);


  }


  const deleteTodo = (index) => {

    console.log(index);
    todo.splice(index, 1)
    setTodo([...todo])

  }

  const editTodo = (index) => {

    const updatedValue = prompt('Enter Updated Title')
    console.log(index);
    if(updatedValue === ''){
      alert("Enter Updated Value!")
      return
    }else{
        todo[index].title = updatedValue;
        setTodo([...todo])
    }
  }



  return (

    <>
      <h1>TODO APP</h1>
      <div className="container">
        <form className="todo-form" onSubmit={add}>
          <input type="text" className="todo-input" placeholder="Enter a task..." value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <button type="submit" className="todo-button">Add</button>
        </form>
      </div>

      <div className="main-div">
        {todo.length > 0   ? <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Todos</th>
              <th>Actions</th>
            </tr>
          </thead>

          {
            todo.map((item, index) => {

              return (

                <tbody key={item.id}>
                  <tr>
                    <td className="serial-no">{index + 1}</td>
                    <td className="heading">{item.title}</td>
                    <td className="button-group">
                      <button className="edit-btn" onClick={() => { editTodo(index) }}>Edit</button>
                      <button className="delete-btn" onClick={() => { deleteTodo(index) }}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </table>

        : <h1>No Todo Found...</h1>
        
        }

      </div>

    </>
  );
};

export default TodoApp;


