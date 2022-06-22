import React from "react";
import "./App.css";
import TodoBoard from "./Todo-Board/TodoBoard";

function App() {
  return (
    <div
      className="App"
      style={{ width: "1200px", margin: "0 auto", border: "1px solid #32D475" }}
    >
      <TodoBoard />
    </div>
  );
}

export default App;
