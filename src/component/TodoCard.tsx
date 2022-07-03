import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { StyledCard } from "../style/style";
import { Avatar, Card } from "antd";
import { dragItem, TodoType } from "../store/store";
import { useRecoilState, useRecoilValue } from "recoil";
const { Meta } = Card;
function TodoCard(props: { list: TodoType[] }) {
  const [dragged, setDragged] = useRecoilState<TodoType>(dragItem);
  const draglist = useRecoilValue(dragItem);
  const dragStartHandler = (id: any) => {
    setDragged((prev) => id);
  };
  return (
    <>
      {props.list.map((item) => (
        <StyledCard
          key={item.id}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          onDragStart={(event) => dragStartHandler(item)}
          draggable={true}
        >
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
