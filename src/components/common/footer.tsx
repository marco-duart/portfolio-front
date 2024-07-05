//NATIVE
//LIBRARIES
import {
  FacebookCircle,
  InstagramAlt,
  Google,
  LinkedinSquare,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos";
//COMPONENTS
//STYLES
import { Link } from "react-router-dom";
import * as S from "./styles";
//UTILS
import { LINKS } from "../../utils/enums/links";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterList>
          <h4>Contato</h4>
          <span>
            <li>
              <a href="/" target="_blank">WhatsApp</a>
            </li>
          </span>
        </S.FooterList>
        <S.FooterList>
          <h4>Redes Sociais</h4>
          <li>
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <FacebookCircle />
              </div>
            </a>{" "}
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <LinkedinSquare />
              </div>
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <Google />
              </div>
            </a>{" "}
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <Twitter />
              </div>
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <InstagramAlt />
              </div>
            </a>{" "}
            <a href={LINKS.linkedin} target="_blank">
              <div>
                <Youtube />
              </div>
            </a>
          </li>
        </S.FooterList>
        <S.FooterList></S.FooterList>
      </S.FooterContent>
      <S.FooterEnd>
        <span>
          &copy; {year} . Todos os
          direitos reservados
        </span>
        <span>
          <Link to="/use-terms">Termos de Uso</Link>
          <Link to="/privacy">Política de Privacidade</Link>
        </span>
      </S.FooterEnd>
    </S.Footer>
  );
};

export default Footer;
