import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { StyledCard } from "../style/style";
import { Avatar, Card } from "antd";
import { TodoType } from "../store/store";
const { Meta } = Card;
function TodoCard(props: { list: TodoType[] }) {
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
