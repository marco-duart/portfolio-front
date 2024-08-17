import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";

export const AboutMe = () => {
  return (
    <S.Container>
      <S.Title>Sobre Mim</S.Title>
      <S.FlexContainer>
        <S.TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </S.TextBlock>
        <S.PortraitWrapper>
          <S.PortraitImage src={CONSTANTS.IMAGES.about} alt="about" />
          <S.PortraitOverlay />
        </S.PortraitWrapper>
      </S.FlexContainer>
    </S.Container>
  );
};
