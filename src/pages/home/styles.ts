import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.colors.secundary};
  overflow: hidden;
  position: relative;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-family: ${props => props.theme.fonts.playWrite};
  font-size: 2rem;
  margin: 3rem 0;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  overflow: hidden;
`;

export const ImageWrapper = styled(motion.div)<{
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
      ? (props.side === "left" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)")
      : "inset(0 100% 0 0)"};
  transform: ${(props) =>
    props.hovered
      ? `translateX(${props.side === "left" ? "-30%" : "30%"}) scale(1)`
      : "translateX(0%) scale(0.9)"};
  transition: transform 0.3s ease, clip-path 0.3s ease;
  z-index: ${(props) => (props.hovered ? 2 : 1)};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div<{ hoveredSection: "front" | "back" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.hoveredSection === "front" ? "right: 10%;" : "left: 10%;")}
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
`;
