import React from "react";
import FlipMove from "react-flip-move";
import Todo from "../todo/Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <FlipMove enterAnimation="fade" leaveAnimation="elevator">
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </FlipMove>
  );
};

export default TodoList;
