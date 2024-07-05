import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.colors.background };
  display: flex;
`
  
export const Section = styled("div")<{ side: "left" | "right" }>`
  width: ${ props => props.side === "left" ? "40%" : "60%" };
  min-height: 100vh;
  background-color: ${ props => props.side === "left" ? props.theme.colors.secundary : props.theme.colors.white };
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${ props => props.side === "left" ? "end" : "start" };
  gap: 1.5rem;
`

export const SectionText = styled.h2`
  width: 50%;
  text-align: end;
  color: ${ props => props.theme.colors.white };
`