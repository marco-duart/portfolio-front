//NATIVE
//LIBRARIES

//COMPONENTS

//STYLES
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Logo from "./logo";
import * as S from "./styles";
//UTILS

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    const headerOffset = window.innerHeight * 0.08;
  
    if (location.pathname !== "/") {
      navigate("/", { state: { target: id } });
    } else {
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -headerOffset,
      });
    }
  };

  return (
    <S.Header>
      <div>
        <Logo />
      </div>
      <S.Navbar>
        <S.HeaderScrool onClick={() => handleScrollTo("about")}>
          Home
        </S.HeaderScrool>
        <S.HeaderScrool onClick={() => handleScrollTo("skills")}>
          Habilidades
        </S.HeaderScrool>
        <S.HeaderScrool onClick={() => handleScrollTo("portfolio")}>
          Projetos
        </S.HeaderScrool>
        <S.HeaderScrool onClick={() => handleScrollTo("contact")}>
          Contato
        </S.HeaderScrool>
        <S.HeaderLink to={"/curriculum"}>Currículo</S.HeaderLink>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
