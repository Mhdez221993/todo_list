import { render, screen, waitFor } from "@testing-library/react";

import React from "react";
import TodoList from "./TodoList";
import userEvent from "@testing-library/user-event";

test("renders TodoList correctly", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
});

test("adds, toggles, and removes todos", async () => {
  render(<TodoList />);

  const input = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", { name: "Add" });

  // Add todo
  userEvent.type(input, "Buy milk");
  userEvent.click(addButton);

  const addedTodo = await screen.findByText("Buy milk");
  expect(addedTodo).toBeInTheDocument();

  // Toggle todo
  const checkbox = screen.getByRole("checkbox");
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // Remove todo
  const removeButton = screen.getByText("Remove");
  userEvent.click(removeButton);

  await waitFor(() => {
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
  });
});
