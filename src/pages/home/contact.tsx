import * as S from "./styles"
import * as CONSTANTS from "../../utils/constants/constants";

export const Contact = () => {
  return (
    <S.Container>
      <S.Title>Contato</S.Title>
      <S.FlexContainer>
      <S.PortraitWrapper>
          <S.PortraitImage src={CONSTANTS.IMAGES.contact} alt="about" />
          <S.PortraitOverlay />
        </S.PortraitWrapper>
        <S.TextBlock></S.TextBlock>
      </S.FlexContainer>
      <hr />
    </S.Container>
  )
}