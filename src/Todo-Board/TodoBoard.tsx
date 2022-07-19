import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import TodoCard from "../component/TodoCard";
import { TodoType, todoList, dragItem } from "../store/store";

function TodoBoard(props: { title: string; option: string; color: string }) {
  const todolist = useRecoilValue<TodoType[]>(todoList);
  const dragged = useRecoilValue(dragItem);
  const list = todolist.filter((x) => x.period == props.option);
  const setTodo = useSetRecoilState<TodoType[]>(todoList);

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newTodo = todolist.map((y) =>
      y.id == dragged.id ? { ...y, id: Date.now(), period: props.option } : y
    );
    setTodo(newTodo);
  };
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
      }}
      onDrop={dropHandler}
      onDragOver={allowDrop}
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
