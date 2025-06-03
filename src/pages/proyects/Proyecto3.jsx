import styled from 'styled-components';
import Layout from '../../components/Layout';
import video from '../../assets/taim/TAIM.mp4';
import logo1 from '../../assets/taim/gitEstatico.png';
import logo2 from '../../assets/taim/gitAnimado.gif';
import captura1 from '../../assets/taim/taim.png';
import captura2 from '../../assets/taim/taim.png';
import captura3 from '../../assets/taim/taim.png';
import boceto from '../../assets/taim/bocetos.jpeg';


const ProjectWrapper = styled.div`
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  color: #2c2c2c;
`;

const ProjectTitle = styled.h1`
  font-size: 2.2rem;
  color: #c8b3ee;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

const ProjectText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 20px;
`;

const BulletList = styled.ul`
  margin-left: 20px;
  color: #4b5563;
  font-size: 1.05rem;
  line-height: 1.6;

  li {
    margin-bottom: 10px;
  }
`;

const ImageSection = styled.section`
  margin: 40px 0;
`;

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const SingleImage = styled.div`
  width: 300px;
  text-align: center;
`;

const ImageTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #6b7280;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
`;

const ExternalLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  color: #fbd160;
  text-decoration: none;
  margin: 10px 0;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: #c8b3ee;
  }
`;

const Proyecto3 = () => {
  return (
    <>
      <Layout>
        <ProjectWrapper>
          <ProjectTitle>TAIM – Banco de tiempo</ProjectTitle>

          <ProjectText>
            Taim fue el proyecto final de un bootcamp de 6 meses con Fundación Esplai.
            Es una web de banco de tiempo en la que los usuarios intercambian conocimientos o servicios
            sin dinero, solo tiempo. Desarrollado en equipo, utilizamos tecnologías como HTML, CSS, JavaScript,
            React, React Router DOM, Node.js, Java con Spring Boot y MySQL.
          </ProjectText>

          <SectionTitle>¿Qué es Taim?</SectionTitle>
          <ProjectText>
            Taim es un acrónimo de <span style={{textDecoration:'underline', textDecorationColor:'#fbd160'}}>“Tiempo Acumulado de Intercambio Mutuo”</span>. Es una plataforma donde puedes
            ofrecer tus habilidades por un tiempo determinado y, a cambio, acceder a las de otra persona.
            El sistema de categorías incluye: Servicios, Transporte, Arte, Educación y Bienestar y Salud.
          </ProjectText>

          <SectionTitle>Funcionalidades principales</SectionTitle>
          <BulletList>
            <li>Registro/Login con rutas privadas protegidas.</li>
            <li>Perfil de usuario con habilidades propias e intereses.</li>
            <li>Creación de ofertas con categoría, zona, duración y descripción.</li>
            <li>Panel de ofertas disponibles con posibilidad de contacto.</li>
            <li>Notificaciones por correo de nuevas ofertas y respuestas.</li>
            <li>Scroll en la Home con explicación del funcionamiento.</li>
          </BulletList>

          <SectionTitle>Diseño del logotipo</SectionTitle>
          <ProjectText>
            Además del desarrollo, diseñé el logotipo: un reloj de arena formado por las letras TAIM. Representa
            visualmente el concepto de tiempo como recurso de intercambio. Abajo puedes ver algunos de los
            bocetos originales y una animación donde el reloj de arena se transforma en la palabra TAIM.
          </ProjectText>

          <ImageSection>
            <ImageRow>
              <SingleImage>
                <ImageTitle>Bocetos iniciales</ImageTitle>
                <Image src={boceto} alt="Boceto del logo" />
              </SingleImage>
            </ImageRow>
          </ImageSection>
          <ImageSection>
            <ImageRow>
              <SingleImage>
                <ImageTitle>Logotipo selecionado</ImageTitle>
                <Image src={logo1} alt="Boceto del logo" />
              </SingleImage>
              <SingleImage>
                <ImageTitle>Animación del logotipo</ImageTitle>
                <Image src={logo2} alt="Logo animado" />
              </SingleImage>
            </ImageRow>
          </ImageSection>

          <SectionTitle>Demostración en vídeo</SectionTitle>
          <Video controls>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta el video.
          </Video>

          <SectionTitle>Presentación del proyecto</SectionTitle>
          <ExternalLink href="https://youtu.be/bJr5_iBozHI?si=k3ilL2HEX1gyxPzn&t=1088" target="_blank" rel="noopener noreferrer">
            Ver presentación en YouTube
          </ExternalLink>

          <SectionTitle>Galería del proyecto</SectionTitle>
          <ImageSection>
            <ImageRow>
              <SingleImage>
                <Image src={captura1} alt="Captura 1" />
              </SingleImage>
              <SingleImage>
                <Image src={captura2} alt="Captura 2" />
              </SingleImage>
              <SingleImage>
                <Image src={captura3} alt="Captura 3" />
              </SingleImage>
            </ImageRow>
          </ImageSection>
        </ProjectWrapper>
      </Layout>
    </>
  );
};

export default Proyecto3;