import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import React, { useState } from "react";

export const Home: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<null | "front" | "back">(
    null
  );

  const handleMouseEnter = (section: "front" | "back") => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  const bgColor =
    hoveredSection === "front"
      ? "#ff4d4d"
      : hoveredSection === "back"
      ? "#007bff"
      : "#f0f0f0";

  return (
    <S.Container bgColor={bgColor}>
      <S.ImageContainer>
        <S.ImageWrapper
          side="left"
          onMouseEnter={() => handleMouseEnter("front")}
          onMouseLeave={handleMouseLeave}
          hovered={hoveredSection === "front"}
        >
          <S.Image src={CONSTANTS.IMAGES.frontEnd} alt="Front-end" />
          <S.Info>
            <h2>Front-end Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </S.Info>
        </S.ImageWrapper>
        <S.ImageWrapper
          side="right"
          onMouseEnter={() => handleMouseEnter("back")}
          onMouseLeave={handleMouseLeave}
          hovered={hoveredSection === "back"}
        >
          <S.Image src={CONSTANTS.IMAGES.backEnd} alt="Back-end" />
          <S.Info>
            <h2>Back-end Skills</h2>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </S.Info>
        </S.ImageWrapper>
      </S.ImageContainer>
    </S.Container>
  );
};
