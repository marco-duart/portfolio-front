import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import React, { useState } from "react";
import { Skill } from "../../models/skill";

type Props = {
  skills: undefined | Skill[];
}

export const Skills: React.FC<Props> = ({ skills }) => {
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
      <S.TitleContainer>
        <S.Title>Habilidades</S.Title>
      </S.TitleContainer>
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
            <div>
              {hoveredSection === "front" ? (
                <>
                  {skills?.filter(skill => skill.category === 'front-end').map((skill, index) => <S.SkillInfoIcon key={index} src={skill.link} alt={skill.name} /> )}
                </>
              ) : (
                <>
                  {skills?.filter(skill => skill.category === 'back-end').map((skill, index) => <S.SkillInfoIcon key={index} src={skill.link} alt={skill.name} />)}
                </>
              )}
            </div>
          </S.SkillsInfo>
        )}
      </S.SkillsImageContainer>
      <hr />
    </S.Container>
  );
};
