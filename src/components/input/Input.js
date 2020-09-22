import React, { useState } from "react";
import "./Input.css";

const Input = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  // On submit action
  const submitHandler = (e) => {
    e.preventDefault();
    if (text)
      setTodos([
        { id: Date.now(), text, inProgress: false, completed: false },
        ...todos,
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
      <button
        type="submit"
        value="Add"
        onClick={(e) => submitHandler(e)}
        className="input-btn"
      >
        <i className="fas fa-plus-square fa-lg"></i>
      </button>
    </form>
  );
};

export default Input;
