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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 4px solid #85858589;

  img {
    max-height: 100%;
    object-fit: contain;
  }
`

export const StyledCarousel = styled(Carousel)`
  .control-arrow {
    opacity: 1 !important;
    visibility: true !important;
    background-color: #85858589 !important;
  }
`