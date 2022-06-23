import React from "react";
import TodoCard from "../component/TodoCard";

function TodoBoard(props: { title: string; color: string }) {
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
          backgroundColor: props.color,
          padding: "10px 0",
          fontWeight: "700",
        }}
      >
        {props.title}
      </p>
      <TodoCard />
    </div>
  );
}

export default TodoBoard;
