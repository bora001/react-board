import {
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { StyledCard } from "../style/style";
import { Avatar, Card } from "antd";
import { dragItem, TodoType, todoList } from "../store/store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { notification } from "antd";
import { useState, useRef } from "react";
const { Meta } = Card;
function TodoCard(props: { list: TodoType[] }) {
  const [showMenu, setShowMenu] = useState<number | null>();
  const [editStatus, setEditStatus] = useState<number | null>();
  const setDragged = useSetRecoilState<TodoType>(dragItem);
  const draglist = useRecoilValue(dragItem);
  const todolist = useRecoilValue<TodoType[]>(todoList);
  const setTodo = useSetRecoilState<TodoType[]>(todoList);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const dragStartHandler = (id: any) => {
    setDragged(id);
  };

  const rewriteCard = (id: number) => {
    const title = titleRef.current!.value;
    const desc = descRef.current!.value;

    if (!title || !desc) {
      alert("Please, Enter valid value!");
      return;
    } else {
      const newTodo = todolist.map((card) =>
        card.id == id ? { ...card, title, desc } : card
      );

      setTodo(newTodo);
      notification.success({
        message: `Todo text is changed! `,
        placement: "top",
      });
    }
    setEditStatus(() => null);
    setShowMenu(() => null);
  };

  const editCard = (id: number) => {
    if (id == editStatus) {
      rewriteCard(id);
      return;
    }
    setEditStatus(() => id);
  };

  const deleteCard = (id: number) => {
    const newTodo = todolist.filter((card) => card.id != id);
    setTodo(newTodo);
    notification.success({
      message: `Selected Todo deleted `,
      placement: "top",
    });
  };

  const closeCard = () => {
    setShowMenu(null);
    setEditStatus(null);
  };

  return (
    <>
      {props.list.map((item) => (
        <StyledCard
          key={item.id}
          actions={
            showMenu == item.id
              ? [
                  <EditOutlined key="edit" onClick={() => editCard(item.id)} />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => deleteCard(item.id)}
                  />,
                  <CloseOutlined key="close" onClick={closeCard} />,
                ]
              : []
          }
          onDragStart={() => dragStartHandler(item)}
          draggable={true}
        >
          {showMenu != item.id && (
            <MoreOutlined
              key="more"
              onClick={() => setShowMenu(item.id)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "10px",
              }}
            />
          )}
          {item.id == editStatus ? (
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <input
                  ref={titleRef}
                  placeholder="title"
                  style={{ textIndent: "5px", width: "100%" }}
                  required
                />
              }
              description={
                <input
                  ref={descRef}
                  placeholder="description"
                  style={{ textIndent: "5px", width: "100%" }}
                  required
                />
              }
            />
          ) : (
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.title}
              description={item.desc}
            />
          )}
        </StyledCard>
      ))}
    </>
  );
}

export default TodoCard;
