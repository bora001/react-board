import React from "react";
import TodoCard from "../component/TodoCard";

function TodoBoard() {
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#CEF6D8",
          padding: "10px 0",
          fontWeight: "700",
        }}
      >
        Today's Todo
      </p>
      <TodoCard />
    </div>
  );
}

export default TodoBoard;
