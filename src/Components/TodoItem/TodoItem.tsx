import React from "react";
import { Checkbox } from "antd";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggle }) => {
  return (
    <div className={`${styles.todoItem} ${completed ? styles.completed : ""}`}>
      <Checkbox
        checked={completed}
        onChange={onToggle}
        className={styles.checkbox}
      >
        <span className={styles.task}>{task}</span>
      </Checkbox>
    </div>
  );
};

export default TodoItem;
