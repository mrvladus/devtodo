import React, { useState } from "react";
import "./Input.css";

const Input = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  // On submit action
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Date.now(), text, inProgress: false, completed: false },
    ]);
    setText("");
  };
  return (
    <form className="input-form">
      <input
        type="text"
        className="input-field"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="submit"
        value="Add"
        onClick={(e) => submitHandler(e)}
        className="input-btn"
      />
    </form>
  );
};

export default Input;
