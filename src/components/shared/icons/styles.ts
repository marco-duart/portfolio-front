//NATIVE

//LIBRARIES
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { NavLink } from "react-router-dom";

//COMPONENTS

//STYLES

//UTILS
//HOOKS

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${StyledIconBase} {
    color: ${props => props.theme.colors.background};
  }
`;

export const Link = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 25px;
  border-radius: 10px;

  h3 {
    text-decoration: none;
    color: ${(props) => props.theme.colors.background};
    font-family: ${ props => props.theme.fonts.candal};
  }
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }
  &.active {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }
`;