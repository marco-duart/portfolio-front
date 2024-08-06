import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

export const CarouselSection = styled.div`
  max-width: 400px;
  max-height: 200px;
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

export const IconSection = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  .control-arrow {
    opacity: 1 !important;
    visibility: visible !important;
    background-color: #85858589 !important;
  }
`;