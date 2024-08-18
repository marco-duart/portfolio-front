//NATIVE
//LIBRARIES

//COMPONENTS

//STYLES
import Logo from "./logo";
import * as S from "./styles";
//UTILS

const Header: React.FC = () => {

  return (
    <S.Header>
      <div>
        <Logo />
      </div>
      <S.Navbar>
        <S.HeaderLink to={"/home"}>
          Home
        </S.HeaderLink>
        <S.HeaderScrool to="about" smooth={true} duration={500}>
          About
        </S.HeaderScrool>
        <S.HeaderScrool to="contact" smooth={true} duration={500}>
          Contact
        </S.HeaderScrool>
        <S.HeaderLink to={"/portfolio"}>
          Portfolio
        </S.HeaderLink>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
