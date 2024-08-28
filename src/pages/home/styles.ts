import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
`;

export const TitleContainer = styled.div`
  height: 15%;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.playWrite};
  font-size: 2.5rem;
`;

export const FlexContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;

export const TextContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SubtitleBlock = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
`;

export const TextBlock = styled.div`
  width: 55%;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.6;
`;

export const PortraitWrapper = styled.div`
  width: 30%;
  position: relative;
  transform: rotate(0deg);
`;

export const PortraitImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
`;

export const PortraitOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(18, 246, 214, 0.3),
    rgba(18, 246, 214, 0.5)
  );
  border-radius: 15px;
  z-index: -1;
  transform: rotate(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const SkillsImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 85%;
  display: flex;
  overflow: hidden;
`;

export const SkillsImageWrapper = styled(motion.div)<{
  side: "left" | "right";
  hovered: boolean;
  initialState: boolean;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  ${(props) => (props.side === "left" ? "left: 0;" : "right: 0;")}
  clip-path: ${(props) =>
    props.hovered
      ? "inset(0 0 0 0)"
      : props.initialState
      ? props.side === "left"
        ? "inset(0 50% 0 0)"
        : "inset(0 0 0 50%)"
      : "inset(0 100% 0 0)"};
  transform: ${(props) =>
    props.hovered
      ? `translateX(${props.side === "left" ? "-30%" : "30%"}) scale(1)`
      : "translateX(0%) scale(1)"};
  transition: transform 0.3s ease, clip-path 0.3s ease;
  z-index: ${(props) => (props.hovered ? 2 : 1)};
`;

export const SkillsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SkillsInfo = styled.div<{ hoveredSection: "front" | "back" }>`
  max-width: 40%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.hoveredSection === "front" ? "right: 10%;" : "left: 10%;"}
  color: #fff;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const SkillInfoIcon = styled.img`
  width: 4rem;
`;

export const IconBlock = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  div {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.poppins};
    font-size: 1.25rem;
  }

  ${StyledIconBase} {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const PortfolioCardContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-top: 2rem;
`;

export const PortfolioCardWrapper = styled.div`
  width: 320px;
  height: 230px;
  background-image: linear-gradient(
    163deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export const PortfolioCard = styled.div`
  width: 320px;
  height: 230px;
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h4 {
    color: ${(props) => props.theme.colors.white};
  }

  img {
    width: 90%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  table {
    width: 80%;
  }
`;

export const TableRow = styled.td`
  vertical-align: top;
  padding: 0 0 1rem 1rem;
`;

export const CarouselSection = styled.div`
  max-width: 60%;
  max-height: 80%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CarouselItem = styled.div`
  background-color: #181818;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 4px solid #85858589;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;

  .control-arrow {
    opacity: 1 !important;
    visibility: visible !important;
    background-color: #85858589 !important;
  }
`;
