import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import TodoItem from "./TodoItem";

test("renders TodoItem correctly", () => {
  const todo = { id: 1, text: "Buy milk", done: false };
  const toggleTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  );

  expect(screen.getByText("Buy milk")).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).not.toBeChecked();
  expect(screen.getByText("Remove")).toBeInTheDocument();
});

test("toggle and remove callbacks are called correctly", () => {
  const todo = { id: 1, text: "Buy milk", done: false };
  const toggleTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  );

  userEvent.click(screen.getByRole("checkbox"));
  expect(toggleTodo).toHaveBeenCalledWith(1);

  userEvent.click(screen.getByText("Remove"));
  expect(removeTodo).toHaveBeenCalledWith(1);
});
