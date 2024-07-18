import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants"
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<null | 'front' | 'back'>(null);

  const handleMouseEnter = (section: 'front' | 'back') => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageSection
          backgroundColor={hoveredSection === 'front' ? 'rgba(0, 123, 255, 0.7)' : 'transparent'}
          onMouseEnter={() => handleMouseEnter('front')}
          onMouseLeave={handleMouseLeave}
        >
          <S.Image
            src="/front-end-image.png"
            style={{
              transform: hoveredSection === 'front' ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <S.Info>
            <h2>Front-end Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </S.Info>
        </S.ImageSection>
        <S.ImageSection
          backgroundColor={hoveredSection === 'back' ? 'rgba(255, 193, 7, 0.7)' : 'transparent'}
          onMouseEnter={() => handleMouseEnter('back')}
          onMouseLeave={handleMouseLeave}
        >
          <S.Image
            src="/back-end-image.png"
            style={{
              transform: hoveredSection === 'back' ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <S.Info>
            <h2>Back-end Skills</h2>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </S.Info>
        </S.ImageSection>
      </S.ImageContainer>
    </S.Container>
  );
};

export default Home;