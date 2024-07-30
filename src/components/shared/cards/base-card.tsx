//NATIVE
import { ReactNode } from "react";
//LIBRARIES
//COMPONENTS

//STYLES
import * as S from "./styles";

//UTILS

type Props = {
  children: ReactNode;
};

const BaseCard: React.FC<Props> = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};

export default BaseCard;
