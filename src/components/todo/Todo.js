import React from "react";
import "./Todo.css";

const Todo = ({ todo, todos, setTodos }) => {
  // Handlers
  const deleteHandler = () => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };
  const checkHandler = () => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !todo.completed } : item
    );
    setTodos(newTodos);
  };
  return (
    <div className={todo.completed ? "todo completed" : "todo"}>
      <p className="todo-text">{todo.text}</p>
      <button className="todo-btn-d" onClick={() => deleteHandler()}>
        <i className="fas fa-trash"></i>
      </button>
      <button className="todo-btn-c" onClick={() => checkHandler()}>
        <i className="fas fa-check"></i>
      </button>
    </div>
  );
};

export default Todo;
