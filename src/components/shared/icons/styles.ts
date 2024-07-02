//NATIVE

//LIBRARIES
import styled from "styled-components";

//COMPONENTS

//STYLES

//UTILS

export const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 10px;
  width: 40px;
  height: 40px;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }
`;