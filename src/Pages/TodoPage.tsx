import React, { useState } from "react";
import styles from "./TodoPage.module.scss";
import AddTodo from "../Components/AddTodo/AddTodo";
import TodoList from "../Components/TodoList/TodoList";

let nextId = 1;

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: number; task: string; completed: boolean }[]
  >([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleAdd = (task: string) => {
    setTodos([...todos, { id: nextId++, task, completed: false }]);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.todoPage}>
      <AddTodo onAdd={handleAdd} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <footer className={styles.footer}>
        <span>{todos.filter((todo) => !todo.completed).length} items left</span>
        <div className={styles.filters}>
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? styles.selected : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? styles.selected : ""}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? styles.selected : ""}
          >
            Completed
          </button>
        </div>
        <button onClick={handleClearCompleted}>Clear completed</button>
      </footer>
    </div>
  );
};

export default TodoPage;
