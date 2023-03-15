import React from "react";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className="text"
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
