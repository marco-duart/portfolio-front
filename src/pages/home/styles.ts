import styled from "styled-components"
import * as CONSTANTS from "../../utils/constants/constants"

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  //background-image: url(${ CONSTANTS.IMAGES.backgroundEffect2 });
  background-color: ${ props => props.theme.colors.secundary };
`