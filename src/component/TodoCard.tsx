import {
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { StyledCard } from "../style/style";
import { Avatar, Card } from "antd";
import { dragItem, TodoType, todoList } from "../store/store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { notification } from "antd";
import { useState } from "react";
const { Meta } = Card;
function TodoCard(props: { list: TodoType[] }) {
  const [showMenu, setShowMenu] = useState<number | null>();
  const setDragged = useSetRecoilState<TodoType>(dragItem);
  const draglist = useRecoilValue(dragItem);
  const todolist = useRecoilValue<TodoType[]>(todoList);
  const setTodo = useSetRecoilState<TodoType[]>(todoList);

  const dragStartHandler = (id: any) => {
    setDragged(id);
  };
  const editCard = (id: number) => {
    console.log("editt");
  };
  const deleteCard = (id: number) => {
    const newTodo = todolist.filter((card) => card.id != id);
    setTodo(newTodo);
    notification.success({
      message: `Selected Todo deleted `,
      placement: "top",
    });
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
                  <CloseOutlined
                    key="close"
                    onClick={() => setShowMenu(null)}
                  />,
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
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.title}
            description={item.desc}
          />
        </StyledCard>
      ))}
    </>
  );
}

export default TodoCard;
