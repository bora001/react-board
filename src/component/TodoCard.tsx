import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { StyledCard } from "../style/style";
import { Avatar, Card } from "antd";
const { Meta } = Card;

function TodoCard() {
  return (
    <StyledCard
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </StyledCard>
  );
}

export default TodoCard;
