import { NavLink } from "react-router-dom";
import styled from "styled-components";

// HEADER
export const Header = styled.header`
  /* position: sticky; */
  /* top: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 4rem;
  background-color: ${(props) => props.theme.colors.background};
  /* z-index: 1; */
`;

export const Navbar = styled.header`
  display: flex;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
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
`;

// SIDEBAR
export const Sidebar = styled("div")<{ expanded: boolean }>`
  width: ${(props) => (props.expanded ? "280px" : "80px")};
  height: 100%;
  top: 0;
  position: sticky;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SidebarStick = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 0px;
  padding-bottom: 40px;
`;

export const IconsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 1.5rem 10px;
`;

export const Menu = styled.div`
  height: 80px;
  /* display: flex;
  align-items: center; */
`;

export const Navigation = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  gap: 1rem;
`;

// FOOTER
export const Footer = styled.footer`
  width: 100%;
  height: 400px;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 83%;
  padding: 50px 30px 0 30px;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  justify-content: space-around;
`;

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
    font-family: ${(props) => props.theme.fonts.openSans};
    color: ${(props) => props.theme.colors.white};
  }
  a {
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.openSans};
    color: ${(props) => props.theme.colors.white};
  }
  div {
    width: 40px;
    height: 40px;
    margin-bottom: 25px;
  }
`;

export const FooterEnd = styled.div`
  width: 100%;
  height: 17%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.lightGray};

  span {
    display: flex;
    gap: 20px;
  }
  a {
    color: ${(props) => props.theme.colors.white};
  }
`;
