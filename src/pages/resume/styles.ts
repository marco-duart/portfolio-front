import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PageTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.playWrite};
  font-size: 2.5rem;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export const BasicInfoItem = styled.div`
  margin-bottom: 1rem;
`;

export const ItemTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const Timeline = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 1rem 0;
  border-left: 2px solid ${(props) => props.theme.colors.gray};
  margin-left: 1.5rem;
  margin-bottom: 2rem;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.white};
`;

export const TimelineContent = styled.div`
  padding-left: 1rem;
`;

export const TimelineTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const TimelineSubtitle = styled.h5`
  font-size: 14px;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const TimelineDescription = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  color: ${(props) => props.theme.colors.white};
`;

export const TechSection = styled.div`
  width: 80%;
  max-width: 800px;
`;

export const TechTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
  padding-bottom: 5px;
  color: ${(props) => props.theme.colors.white};
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

export const TechName = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.white};
`;
