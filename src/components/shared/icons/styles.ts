//NATIVE

//LIBRARIES
import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon'

//COMPONENTS

//STYLES

//UTILS

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  
  a {
    text-decoration: none;
    color: ${ props => props.theme.colors.black };
  }
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: red;
  }
`