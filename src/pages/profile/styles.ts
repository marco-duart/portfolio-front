import styled from "styled-components";

export const Container = styled.div`
  min-height: 40%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;
