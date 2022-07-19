import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoForm from "./component/TodoForm";
import { StyledButton } from "./style/style";
import TodoBoard from "./Todo-Board/TodoBoard";
import Modal from "./UI/Modal";
import { TodoType, todoList, dragItem } from "./store/store";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const todolist = useRecoilValue<TodoType[]>(todoList);
  console.log(todolist);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "1200px",
          height: "300px",
          margin: "30px auto",
          border: "1px solid #32D475",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <TodoBoard option="today" title="Today's Todo" color="#CEF6D8" />
          <TodoBoard option="week" title="This Week's Todo" color="#abe4b9" />
          <TodoBoard option="month" title="This Month's Todo" color="#8cdca0" />
          <TodoBoard option="year" title="This Year's Todo" color="#4fc86d" />
        </div>
        {!todolist.length && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              letterSpacing: "1px",
            }}
          >
            <p>There is no Todolist</p>
          </div>
        )}
      </div>

      <StyledButton onClick={() => setModalOpen(true)}>
        Create New Todo
      </StyledButton>

      {modalOpen && (
        <Modal>
          <TodoForm modalClose={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
