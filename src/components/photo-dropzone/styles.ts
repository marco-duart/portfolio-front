import styled from "styled-components";

export const DropzoneButton = styled.button<{ isDragActive: boolean }>`
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125), 0 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.8rem 1.5rem;
  margin: 1rem;
  background-color: ${props =>
    props.isDragActive ? props.theme.colors.create : props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.candal};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  label {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.create};
    transform: translateX(${props => (props.isDragActive ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;
