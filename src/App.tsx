import React from "react";
import TodoPage from "./Pages/TodoPage";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="header">todos</h1>
      <main className="todo-app">
        <TodoPage />
      </main>
    </div>
  );
};

export default App;
