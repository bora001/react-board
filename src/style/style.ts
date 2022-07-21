import styled from "styled-components";
import { Card } from "antd";

export const CenteredCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
`;

export const EmptyBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  letter-spacing: 1px;
  padding: 80px 20px;
`;

export const BoardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: auto;
  margin: 30px auto;
  border: 1px solid #32d475;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  background-color: #ecffed;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: #9effc0;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  p {
    color: red;
  }

  select {
    padding: 2px;
    margin: 5px 0 10px;
  }
`;

export const StyledInput = styled.input`
  margin: 5px 0 10px;
`;

export const StyledModalCnt = styled.div`
  position: relative;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  /* width: 100%; */
  /* width: 100%; */
  cursor: pointer;
  padding: 5px 30px;
  margin: 10px auto 0;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #32d480;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
