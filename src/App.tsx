import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import TodoForm from "./component/TodoForm";
import {
  BoardCard,
  CenteredCard,
  EmptyBoard,
  Flex,
  StyledButton,
} from "./style/style";
import TodoBoard from "./Todo-Board/TodoBoard";
import Modal from "./UI/Modal";
import { TodoType, todoList, dragItem } from "./store/store";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const todolist = useRecoilValue<TodoType[]>(todoList);
  console.log(todolist);
  return (
    <CenteredCard>
      <BoardCard>
        <Flex>
          <TodoBoard option="today" title="Today's Todo" color="#CEF6D8" />
          <TodoBoard option="week" title="This Week's Todo" color="#abe4b9" />
          <TodoBoard option="month" title="This Month's Todo" color="#8cdca0" />
          <TodoBoard option="year" title="This Year's Todo" color="#4fc86d" />
        </Flex>
        {!todolist.length && (
          <EmptyBoard>
            <p>There is no Todolist</p>
          </EmptyBoard>
        )}
      </BoardCard>

      <StyledButton onClick={() => setModalOpen(true)}>
        Create New Todo
      </StyledButton>

      {modalOpen && (
        <Modal>
          <TodoForm modalClose={() => setModalOpen(false)} />
        </Modal>
      )}
    </CenteredCard>
  );
}

export default App;
