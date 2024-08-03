import styled from "styled-components";

export const Container = styled.div`
  min-height: 40%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 80%;
  margin-bottom: 4rem;

  div {
    display: flex;
    flex-wrap: wrap;
  }

  hr {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export const SubTitle = styled.h2`
  width: 100%;
  text-align: left;
`;
