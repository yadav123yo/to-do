import React, { useState } from 'react';
import styles from "./Todo.module.css";
import { FaPlus } from "react-icons/fa";
import TodoItem from './TodoItem';
const Todo = () => {
    let [newTodo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);

    const onDelete = (id)=>{
        let newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

const handleChange = (e)=>{
setTodo(e.target.value);
}
  return (
    <div className={styles.container}>
        <h1>Todo App</h1>
        <div className={styles.input_addbtn_div}>
        <input value = {newTodo} type="text" onChange={handleChange} className ={styles.input} placeholder="Write Something..."
        onKeyDownCapture ={(e)=>{
            if(e.key === "Enter"){
                if(newTodo !== ""){
                    todos.push({
                        id: Date.now(),
                        value: newTodo,
                        isCompleted:false
                    });
                    setTodos([...todos]);
                    setTodo("");
                }
            }
          }} />
        <button onClick={()=>{
            if(newTodo !== ""){
                todos.push({
                    id: Date.now(),
                    value: newTodo,
                    isCompleted:false
                });
                setTodos([...todos]);
                setTodo("");
            }
            }} className ={styles.addbtn}><FaPlus/></button>
        </div>
        {todos.map((todo) => (
            <TodoItem  key={todo.id} todo = {todo} onDelete = {onDelete}/>
        ))}
    </div>
  )
}

export default Todo



// Time 2:12:09