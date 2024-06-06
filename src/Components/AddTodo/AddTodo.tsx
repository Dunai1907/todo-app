import React, { useState } from "react";
import { Input } from "antd";
import styles from "./AddTodo.module.scss";

interface AddTodoProps {
  onAdd: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className={styles.addTodo}>
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleAdd}
        placeholder="What needs to be done?"
        className={styles.input}
      />
    </div>
  );
};

export default AddTodo;
