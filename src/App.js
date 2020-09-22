import React, { useState } from "react";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoList from "./components/todo-list/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Input todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
