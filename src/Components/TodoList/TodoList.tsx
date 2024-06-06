import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

interface TodoListProps {
  todos: { id: number; task: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
