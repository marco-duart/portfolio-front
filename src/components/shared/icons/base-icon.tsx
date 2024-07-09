//NATIVE
import React from "react";

//LIBRARIES
import { StyledIcon } from "@styled-icons/styled-icon";

//COMPONENTS

//STYLES
import * as S from "./styles";
import { Link } from "react-router-dom";

//UTILS

type Props = {
  icon: StyledIcon;
  link?: string;
  handleClick?: () => void;
  expanded: boolean;
  text: string;
};

const BaseIcon: React.FC<Props> = (props) => {
  const { link, handleClick, expanded, text, ...rest } = props;
  console.log(link);
  return (
    <S.IconContainer>
      {link && (
        <Link to={link}>
          <S.Icon><rest.icon /></S.Icon>
          {expanded && <div>{text}</div>}
        </Link>
      )}
      {handleClick && (
        <div>
          <S.Icon><rest.icon onClick={() => handleClick()} /></S.Icon>
          
          {expanded && <div>{text}</div>}
        </div>
      )}
    </S.IconContainer>
  );
};

export default BaseIcon;
