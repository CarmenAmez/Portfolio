import { Link } from 'react-router-dom';
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
`;


const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;


const NavItem = styled.li`
  width: 100%;

  a {
    display: block;
    text-decoration: none;
    color: #FBD160;
    font-size: 20px;
    padding: 10px 10px;
    border-radius: 10px;
    border: 2px solid;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: #fc65a7;
      color: #62fd62;
      opacity: 1;
    }
  }
`;

const Content = styled.main`
  margin-left: 200px;
  padding: 10px;
  width: calc(100% - 220px);
  overflow-y: auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage src={fondo} alt="Fondo" />
      <LayoutContainer>
        <Sidebar>
          <NavList>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/art">Arte</Link></NavItem>
            <NavItem><Link to="/proyects">Proyectos</Link></NavItem>
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
  children: PropTypes.node
};

export default Layout;
