import React, { useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import { StyledButton } from "./style/style";
import TodoBoard from "./Todo-Board/TodoBoard";
import Modal from "./UI/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

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
          width: "1200px",
          margin: "0 auto",
          border: "1px solid #32D475",
        }}
      >
        <TodoBoard option="today" title="Today's Todo" color="#CEF6D8" />
        <TodoBoard option="week" title="This Week's Todo" color="#abe4b9" />
        <TodoBoard option="month" title="This Month's Todo" color="#8cdca0" />
        <TodoBoard option="year" title="This Year's Todo" color="#4fc86d" />
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
