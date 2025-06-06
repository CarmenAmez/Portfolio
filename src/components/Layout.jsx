import { Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import fondo from '../assets/fondo.jpeg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #333;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #CAF1CA;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C8B3EE;
    border-radius: 6px;
    border: 2px solid #FDCAE1;
  }
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: fill;
  z-index: -1;
`;

const LayoutContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.nav`
  width: 190px;
  height: 100vh;
  backdrop-filter: blur(6px);
  padding: 250px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0,0,0,0.05);
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    width: auto;
  }
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})`
  display: block;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#7a3593' : '#7C5DFA')};
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${({ isActive }) => (isActive ? '#EDEAFF' : 'transparent')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #7a3593;
    color: #7a3593;
    background-color: #F5F1FF;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 12px;
  }
`;


const NavItem = styled.li`
  width: 100%;
`;

const Content = styled.main`
  margin-left: 200px;
  padding: 10px;
  width: calc(100% - 220px);
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
    width: 100%;
  }
`;

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <BackgroundImage src={fondo} alt="Fondo" />
      <LayoutContainer>
        <Sidebar>
          <NavList>
            <NavItem>
              <StyledLink to="/" isActive={location.pathname === '/'}>Inicio</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/art" isActive={location.pathname === '/art'}>Arte</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/proyects" isActive={location.pathname.startsWith('/proyects')}>Proyectos</StyledLink>
            </NavItem>
          </NavList>
        </Sidebar>
        <Content>
          {children}
        </Content>
      </LayoutContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool
};

export default Layout;
