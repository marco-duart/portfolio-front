//NATIVE
import { useState } from "react";
//LIBRARIES
import { Exit, Menu, MenuAltLeft } from "styled-icons/boxicons-regular";
import { Profile } from "styled-icons/icomoon";
import { Portfolio } from "styled-icons/zondicons";

//COMPONENTS
import BaseIcon from "../shared/icons/base-icon";
//STYLES
import * as S from "./styles";

//UTILS
//HOOKS

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <S.Sidebar expanded={expanded}>
      <S.SidebarStick>
        <S.IconsContainer>
          <S.Menu>
            {!expanded && (
              <BaseIcon
                icon={MenuAltLeft}
                link=""
                handleClick={handleExpanded}
                expanded={expanded}
                text=""
              />
            )}
            {expanded && (
              <BaseIcon
                icon={Menu}
                link=""
                handleClick={handleExpanded}
                expanded={expanded}
                text=""
              />
            )}
          </S.Menu>

          <S.Navigation>
            <BaseIcon
              icon={Profile}
              link="/admin/profile"
              expanded={expanded}
              text="Currículo"
            />
            <BaseIcon
              icon={Portfolio}
              link="/admin/portfolio"
              expanded={expanded}
              text="Portfolio"
            />
          </S.Navigation>

          <BaseIcon icon={Exit} link="/" expanded={expanded} text="Sair" />
        </S.IconsContainer>
      </S.SidebarStick>
    </S.Sidebar>
  );
};

export default Sidebar;
