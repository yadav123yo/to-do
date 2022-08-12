import React, { useState } from "react";
import styles from "./Todo.module.css";
import { ImCross } from "react-icons/im";

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
        }}
      />
      <div className={isCompleted ? styles.striked: ""}>
        <h2>{todo.value}</h2>
      </div>
      <button onClick={() => onDelete(todo.id)} className ={styles.btn_cross} >
        <ImCross className={styles.btn}/>
      </button>
    </div>
  );
};

export default TodoItem;
