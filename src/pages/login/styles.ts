import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.colors.background};
`
  
export const Section = styled("div")<{ side: "left" | "right" }>`
  width: ${ props => props.side === "left" ? "40%" : "60%" };
  min-height: 100%;
  background-color: ${ props => props.side === "left" ? props.theme.colors.primary : props.theme.colors.secundary };
`