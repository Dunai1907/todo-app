import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  const todos = [
    { id: 1, task: "Task 1", completed: false },
    { id: 2, task: "Task 2", completed: true },
  ];
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  it("should render list of todos", () => {
    render(
      <TodoList todos={todos} onToggle={mockToggle} onDelete={mockDelete} />
    );
    const task1 = screen.getByText("Task 1");
    const task2 = screen.getByText("Task 2");
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
  });

  it("should call onToggle when todo item is toggled", () => {
    render(
      <TodoList todos={todos} onToggle={mockToggle} onDelete={mockDelete} />
    );
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});
