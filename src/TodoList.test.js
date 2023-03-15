import { render, screen } from "@testing-library/react";

import TodoList from "./TodoList";

test("render TodoList correctly", () => {
  render(<TodoList />);

  const title = screen.getByText("Todo List");
  const input = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", { name: "Add" });

  expect(title).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
