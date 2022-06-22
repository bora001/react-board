import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  width: 300px;
  background-color: #ecffed;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: #9effc0;
  }
`;
