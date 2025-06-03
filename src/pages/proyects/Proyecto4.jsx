import Layout from "../../components/Layout"

import styled from 'styled-components';
import planeo from '../../assets/planeo/planeo.png';
import planeovideo1 from '../../assets/planeo/planeo1.mp4';
import planeovideo2 from '../../assets/planeo/planeo2.mp4';

const Proyecto4 = () => {
  return (
    <>
    <Layout>
    <ProjectWrapper>
      <ProjectTitle>Planeo</ProjectTitle>

      <ProjectText>
        <strong>Planeo</strong> es una página web de gestión de tareas inspirada en plataformas como <em>Jira</em> o <em>Trello</em>. Fue el proyecto final de un <strong>bootcamp de JavaScript</strong>, y desarrollamos tanto el frontend como el backend de forma colaborativa.
      </ProjectText>

      <ProjectText>
        Las herramientas utilizadas fueron: <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>Tailwind</Highlight>, <Highlight>React</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Express</Highlight>, <Highlight>Zod</Highlight>, <Highlight>Drizzle</Highlight>, <Highlight>Jsonwebtoken</Highlight>, <Highlight>cookies</Highlight> para la autenticación y <Highlight>PostgreSQL</Highlight> como base de datos.
      </ProjectText>

      <ProjectText>
        Me encargué principalmente del <strong>frontend</strong> y del <strong>diseño UX/UI</strong>, trabajando en conjunto con mi compañera para definir la estructura visual y experiencia de usuario de la plataforma.
      </ProjectText>

      <ImageSection>
        <ImageTitle>Capturas del proyecto</ImageTitle>
        <ImageRow>
          <SingleImage>
            <ImageLabel>Panel de usuario</ImageLabel>
            <Image src={planeo} alt="Panel de usuario" />
          </SingleImage>
        </ImageRow>
      </ImageSection>

      {/* SECCIÓN UX/UI 
      <ImageSection>
        <ImageTitle>Diseño UX/UI</ImageTitle>
        <ImageRow>
          <SingleImage>
            <ImageLabel>Wireframe inicial</ImageLabel>
            <Image src="/assets/planeo_wireframe.png" alt="Wireframe" />
          </SingleImage>
        </ImageRow>
      </ImageSection>*/}


      <ImageSection>
        <ImageTitle>Demostración del proyecto</ImageTitle>
        <ImageLabel>Inicio de planeo</ImageLabel>
        <Video controls>
          <source src={planeovideo1}type="video/mp4" />

        </Video>
        <ImageLabel>Sobre nosotros de planeo</ImageLabel>
        <Video controls>
          <source src={planeovideo2}type="video/mp4" />
        </Video>
      </ImageSection>
    </ProjectWrapper>
    </Layout>
    </>
  );
};

export default Proyecto4;

// Styled Components
const ProjectWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #222;
  font-family: 'Inter', sans-serif;
`;

const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const ProjectText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  background-color: #fdf2b5;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-weight: 500;
`;

const ImageSection = styled.section`
  margin-top: 3rem;
`;

const ImageTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const SingleImage = styled.div`
  text-align: center;
  max-width: 400px;
`;

const ImageLabel = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;
