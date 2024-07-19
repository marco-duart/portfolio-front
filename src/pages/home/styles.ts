import styled, {css} from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  position: relative;
`;

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
      : props.side === "left"
      ? "inset(0 50% 0 0)"
      : "inset(0 0 0 50%)"};
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

export const Info = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;
