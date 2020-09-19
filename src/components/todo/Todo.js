import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <p className="todo-text">{todo.text}</p>
      <button className="todo-btn">Delete</button>
    </div>
  );
};

export default Todo;
