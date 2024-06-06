import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTodo from "./AddTodo";

describe("AddTodo Component", () => {
  it("should render input field", () => {
    render(<AddTodo onAdd={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should call onAdd when Enter key is pressed", () => {
    const onAdd = jest.fn();
    render(<AddTodo onAdd={onAdd} />);

    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(onAdd).toHaveBeenCalledWith("New Task");
    expect(inputElement).toHaveValue("");
  });
});
