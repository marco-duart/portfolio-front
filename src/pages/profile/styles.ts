import styled from "styled-components"

export const Container = styled.div`
  min-height: 40%;
  background-color: ${ props => props.theme.colors.white };
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`