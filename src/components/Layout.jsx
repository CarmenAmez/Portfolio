import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: myFont;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        position: relative;
        min-height: 100vh;
    }

`;

// Contenedor principal
const Container = styled.div`
display: flex;
width: 100%;
position: fixed;
top: 0;
z-index: 1000;
`;



// Estilos para Nav
const Nav = styled.nav`
background-color: #CAF1CA;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
opacity: 0.8;
font-family: Arial, Helvetica, sans-serif;
padding: 0 10px;
`;


// Estilos para la lista de navegación
const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;
padding: 0;
margin: 0;
flex-wrap: wrap;
width: 100%;
position: relative;

`;

// Estilos para los elementos de la lista de navegación
const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
font-family: myFont;

a {
    text-decoration: none;
    color: #FDCAE1;
    font-size: 22px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: black;
    opacity:0.7;
    margin-left: 40px;

    &:hover {
        transition: 0.2s;
        border-color: #FBD160;
}
}
`;


// Contenedor para el layout
const LayoutContainer = styled.div`

flex-direction: column;
align-items: center;
padding-top: 60px;
`;

// Contenedor para el contenido
const Content = styled.div`
flex: 1;
width: 100%;
box-sizing: border-box;
`;

const Layout = ({ children }) => {

    Layout.propTypes = {
        children: PropTypes.node
    };

    return (
        <LayoutContainer>
            <GlobalStyle />
            <Container>
                <Nav>
                    <Ul>
                        <Li><Link to="/">Home</Link></Li>
                        <Li><Link to="/art">Arte</Link></Li>
                        <Li><Link to="/#">Proyectos</Link></Li>
                        <Li><Link to="/#">Más</Link></Li>
                    </Ul>
                </Nav>
            </Container>
            <Content>
                {children}
            </Content>
        </LayoutContainer>
    );
};

export default Layout;