import { NavLink } from "react-router-dom";
import styled from "styled-components";

// HEADER
export const Header = styled.header`
  /* position: sticky; */
  /* top: 0; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 4rem;
  background-color: ${ props => props.theme.colors.background };
  /* z-index: 1; */
`;

export const Navbar = styled.header`
  display: flex;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  gap: 25px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  :hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
  &.active {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

// LOGO
export const Logo = styled.div`
  width: 130px;

  img {
    width: 100%;
    height: 100%;
  }
`

// FOOTER
export const Footer = styled.footer`
  width: 100%;
  height: 400px;
`

export const FooterContent = styled.div`
  width: 100%;
  height: 83%;
  padding: 50px 30px 0 30px;
  background-color: ${ props => props.theme.colors.tertiary };
  display: flex;
  justify-content: space-around;
`

export const FooterList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;

  span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  h4 {
    font-family: ${ props => props.theme.fonts.openSans };
    color: ${ props => props.theme.colors.white };
  }
  a {
    text-decoration: none;
    font-family: ${ props => props.theme.fonts.openSans };
    color: ${ props => props.theme.colors.white };
  }
  div {
    width: 40px;
    height: 40px;
    margin-bottom: 25px;
  }
`

export const FooterEnd = styled.div`
  width: 100%;
  height: 17%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: ${ props => props.theme.colors.background };
  font-family: ${ props => props.theme.fonts.openSans };
  color: ${ props => props.theme.colors.lightGray };

  span {
    display: flex;
    gap: 20px;
  }
  a{
    color: ${ props => props.theme.colors.white };
  }
`
