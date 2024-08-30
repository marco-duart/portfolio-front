import styled from "styled-components"

export const Paper = styled.div`
  width: 8.5in;
  height: 11in;
  margin: 20px auto;
  padding: 20px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  /* border-radius: 5px; */
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
  margin-bottom: 10px;
  display: flex;
  gap: .5rem;
`

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