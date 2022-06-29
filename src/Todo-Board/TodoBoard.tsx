import React from "react";
import { useRecoilValue } from "recoil";
import TodoCard from "../component/TodoCard";
import { TodoType, todoList } from "../store/store";

function TodoBoard(props: { title: string; option: string; color: string }) {
  const todolist = useRecoilValue<TodoType[]>(todoList);
  const list = todolist.filter((x) => x.period == props.option);
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
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
      <TodoCard list={list} />
    </div>
  );
}

export default TodoBoard;
