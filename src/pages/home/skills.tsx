import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import React, { useState } from "react";

export const Skills: React.FC = () => {
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
      : undefined;

  return (
    <S.Container bgColor={bgColor}>
      <S.Title>Habilidades</S.Title>
      <S.SkillsImageContainer>
        <S.SkillsImageWrapper
          side="left"
          onMouseEnter={() => handleMouseEnter("front")}
          onMouseLeave={handleMouseLeave}
          hovered={hoveredSection === "front"}
          initialState={hoveredSection === null}
        >
          <S.SkillsImage src={CONSTANTS.IMAGES.frontEnd} alt="Front-end" />
        </S.SkillsImageWrapper>
        <S.SkillsImageWrapper
          side="right"
          onMouseEnter={() => handleMouseEnter("back")}
          onMouseLeave={handleMouseLeave}
          hovered={hoveredSection === "back"}
          initialState={hoveredSection === null}
        >
          <S.SkillsImage src={CONSTANTS.IMAGES.backEnd} alt="Back-end" />
        </S.SkillsImageWrapper>
        {hoveredSection && (
          <S.SkillsInfo hoveredSection={hoveredSection}>
            <h2>{hoveredSection === "front" ? "Front-end Skills" : "Back-end Skills"}</h2>
            <ul>
              {hoveredSection === "front" ? (
                <>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Bootstrap</li>
                  <li>Saas</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Redux</li>
                  <li>NextJs</li>
                </>
              ) : (
                <>
                  <li>NodeJs</li>
                  <li>TypeScript</li>
                  <li>Express</li>
                  <li>NestJs</li>
                  <li>Ruby on Rails</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </>
              )}
            </ul>
          </S.SkillsInfo>
        )}
      </S.SkillsImageContainer>
      <hr />
    </S.Container>
  );
};
