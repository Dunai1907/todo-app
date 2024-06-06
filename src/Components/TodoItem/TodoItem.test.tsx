import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

describe("TodoItem Component", () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const task = "Test Task";

  it("should render task", () => {
    render(
      <TodoItem
        task={task}
        completed={false}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );
    const taskElement = screen.getByText(task);
    expect(taskElement).toBeInTheDocument();
  });

  it("should call onToggle when checkbox is clicked", () => {
    render(
      <TodoItem
        task={task}
        completed={false}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );
    const checkboxElement = screen.getByRole("checkbox");
    fireEvent.click(checkboxElement);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
