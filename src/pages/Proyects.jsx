// src/pages/Proyects.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ejemploImg from '../assets/neonsulphur/calabera.jpg';
import ejemploImg2 from '../assets/peluqueria/LogoPelu.png';
import ejemploImg3 from '../assets/taim.png';
import ejemploImg4 from '../assets/planeo.png';


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

const Tag = styled.span`
  display: inline-block;
  background-color: #e0d4fc;
  color: #5e4b8b;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  margin-right: 6px;
  margin-top: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
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
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
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
              <CardTitle>Neon Sulphur</CardTitle>
              <CardText>Desarrollo de ilustraciones promocionales para campaña de merchandising musical.</CardText>
              <TagContainer>
                <Tag>Procreate</Tag>
                <Tag>Ilustración</Tag>
              </TagContainer>
            </CardContent>
          </Card>

          <Card to="/proyectos/proyecto2">
            <CardImage src={ejemploImg2} alt="Proyecto 2" />
            <CardContent>
              <CardTitle>A 180 Grados</CardTitle>
              <CardText>Diseño de logotipo e ilustración para el la peluquería y el proyecto final del CFGM de Peluquería y Cosmética Capilar.</CardText>
              <TagContainer>
                <Tag>Procreate</Tag>
              </TagContainer>
            </CardContent>
          </Card>

            <Card to="/proyectos/proyecto3">
            <CardImage src={ejemploImg3} alt="Proyecto 3" />
            <CardContent>
              <CardTitle>TAIM</CardTitle>
              <CardText>Proyecto final de Bootcamp: diseño y desarrollo de la web TAIM, un banco de tiempo para el intercambio de talentos.</CardText>
              <TagContainer>
                <Tag>Diseño UX/UI</Tag>
                <Tag>React</Tag>
                <Tag>JS</Tag>
              </TagContainer>
            </CardContent>
          </Card>

            <Card to="/proyectos/proyecto4">
            <CardImage src={ejemploImg4} alt="Proyecto 4" />
            <CardContent>
              <CardTitle>Planeo</CardTitle>
              <CardText>Gestor de proyectos y tareas con enfoque ágil.</CardText>
              <TagContainer>
                <Tag>Diseño UX/UI</Tag>
                <Tag>React</Tag>
                <Tag>TS</Tag>
              </TagContainer>
            </CardContent>
          </Card>
        </CardGrid>
      </Container>
    </Layout>
  );
};

export default Proyects;
