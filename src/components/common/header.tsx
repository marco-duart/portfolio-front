//NATIVE
//LIBRARIES

//COMPONENTS

//STYLES
import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import Logo from "./logo";
import * as S from "./styles";
//UTILS

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { target: id } });
    } else {
      const element = document.getElementById(id);
      element && scroll.scrollTo(element.offsetTop);
    }
  };

  return (
    <S.Header>
      <div>
        <Logo />
      </div>
      <S.Navbar>
        <S.HeaderLink to={"/"}>Home</S.HeaderLink>
        {/* <S.HeaderScrool to="about" smooth={true} duration={500}> */}
        <S.HeaderScrool onClick={() => handleScrollTo("skills")}>
          Habilidades
        </S.HeaderScrool>
        {/* <S.HeaderScrool to="contact" smooth={true} duration={500}> */}
        <S.HeaderScrool onClick={() => handleScrollTo("portfolio")}>
          Projetos
        </S.HeaderScrool>
        {/* <S.HeaderScrool to="contact" smooth={true} duration={500}> */}
        <S.HeaderScrool onClick={() => handleScrollTo("contact")}>
          Contato
        </S.HeaderScrool>
        <S.HeaderLink to={"/curriculum"}>Currículo</S.HeaderLink>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
