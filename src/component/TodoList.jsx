
import { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import todo from '../assets/todo.gif';


let count = 0;

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  }



  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []
  )

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos])


  return (
    <div className="todo">
      <div className="todo-header">
        <div>ToDo List</div>  {/* Text part of the header */}
        <img src={todo} alt="Coding Animation" width="50" height="50" />
      </div>
      <div className="todo-add">
        <input ref={inputRef} className="todo-input" type="text" placeholder="Add Your Task" />
        <div onClick={() => { add() }} className="todo-add-btn">Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return <TodoItem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        })}
      </div>
    </div>

  )
}

export default TodoList
