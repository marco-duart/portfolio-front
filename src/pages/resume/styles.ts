import styled from "styled-components"

export const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PageTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.playWrite};
  font-size: 2.5rem;
`;

export const Paper = styled.div`
  width: 8.5in;
  min-height: 11in;
  margin: 20px auto;
  padding: 20px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Name = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  font-weight: normal;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SkillSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
`;

export const Item = styled.div`
  margin-bottom: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: .5rem;
`

export const SkillItem = styled.div`
  width: 20%;
`;

export const ItemTitle = styled.h4`
  font-size: 14px;
  margin: 0;
`;

export const ItemSubtitle = styled.h5`
  font-size: 12px;
  margin: 5px 0;
  color: #555;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  margin: 5px 0 0;
`;