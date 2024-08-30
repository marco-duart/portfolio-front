import styled from "styled-components"

export const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
`;