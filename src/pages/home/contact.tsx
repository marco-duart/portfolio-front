import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { Whatsapp, Linkedin, Github } from "@styled-icons/bootstrap/";
import { Email } from "@styled-icons/material-outlined";

export const Contact = () => {
  return (
    <S.Container>
      <S.Title>Contato</S.Title>
      <S.FlexContainer>
        <S.PortraitWrapper>
          <S.PortraitImage src={CONSTANTS.IMAGES.contact} alt="about" />
          <S.PortraitOverlay />
        </S.PortraitWrapper>
        <S.TextContainer>
          <div>
            <S.IconBlock>
              <Whatsapp />
              <div>
                +55 (62) 9 9406-9668
              </div>
            </S.IconBlock>
          </div>
          <div>
          <S.IconBlock>
            <Email />
            <div>
              marcoaurelio_db@hotmail.com
            </div>
          </S.IconBlock>
          </div>
          <div>
          <S.IconBlock>
            <Linkedin />
            <div>
              in/aurelio-duart/
            </div>
          </S.IconBlock>
          </div>
          <div>
          <S.IconBlock>
            <Github />
            <div>
              github.com/marco-duart
            </div>
          </S.IconBlock>
          </div>
        </S.TextContainer>
      </S.FlexContainer>
      <hr />
    </S.Container>
  );
};
