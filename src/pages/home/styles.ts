import styled from "styled-components"
import { motion } from 'framer-motion';
import * as CONSTANTS from "../../utils/constants/constants"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80%;
  overflow: hidden;
  border: 2px solid #000;
`;

export const ImageSection = styled(motion.div)<{ backgroundColor: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  transition: background-color 0.3s ease;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  z-index: 10;
`;