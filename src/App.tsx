import React from "react";
import "./App.css";
import TodoBoard from "./Todo-Board/TodoBoard";

function App() {
  return (
    <div
      className="App"
      style={{ width: "1200px", margin: "0 auto", border: "1px solid #32D475" }}
    >
      <div style={{ display: "flex" }}>
        <TodoBoard title="Today's Todo" color="#CEF6D8" />
        <TodoBoard title="This Week's Todo" color="#abe4b9" />
        <TodoBoard title="This Month's Todo" color="#8cdca0" />
        <TodoBoard title="This Year's Todo" color="#4fc86d" />
      </div>
    </div>
  );
}

export default App;
