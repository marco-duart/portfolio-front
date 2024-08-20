import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { User } from "../../models/user";

type Props = {
  user: undefined | User
}

export const Portfolio: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Title>Sobre Mim</S.Title>
      <S.FlexContainer>

      </S.FlexContainer>
    </S.Container>
  );
};
