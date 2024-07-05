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
        <S.Link to={"/admin/dashboard"}>
          Home
        </S.Link>
        <S.Link to={"/admin/dashboard"}>
          Portfolio
        </S.Link>
        <S.Link to={"/admin/dashboard"}>
          About
        </S.Link>
        <S.Link to={"/admin/dashboard"}>
          Contact
        </S.Link>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
