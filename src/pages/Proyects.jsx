// src/pages/Proyects.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ejemploImg from '../assets/A4.png'
import ejemploImg2 from '../assets/quimera.png'

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding-bottom: 20px;
`;

const Card = styled(Link)`
  display: block;
  width: 100%;
  max-width: 340px;
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #c8b3ee;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Proyects = () => {
    return (
        <Layout>
            <Container>
                <Title>Proyectos</Title>
                <Subtitle>Aquí puedes ver algunos de mis proyectos más destacados.</Subtitle>
                <CardGrid>
                    <Card to="/proyectos/proyecto1">
                        <CardImage src={ejemploImg} alt="Proyecto 1" />
                        <CardContent>
                            <CardTitle>Proyecto 1</CardTitle>
                            <CardText>Un proyecto chulísimo con React y mucho mimo.</CardText>
                        </CardContent>
                    </Card>
                </CardGrid>
                                <CardGrid>
                    <Card to="/proyectos/proyecto2">
                        <CardImage src={ejemploImg2} alt="Proyecto 2" />
                        <CardContent>
                            <CardTitle>Proyecto 1</CardTitle>
                            <CardText>Un proyecto chulísimo con React y mucho mimo.</CardText>
                        </CardContent>
                    </Card>
                </CardGrid>
            </Container>
        </Layout>
    );
};

export default Proyects;
