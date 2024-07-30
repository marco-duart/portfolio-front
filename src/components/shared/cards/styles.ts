import styled from "styled-components";

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin: 1rem;
  position: relative;
  width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
