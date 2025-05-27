import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import imagenFinal1 from '../../assets/neonsulphur/calabera.jpg';
import imagenFinal2 from '../../assets/neonsulphur/cuervo.jpg';
import imagenFinal3 from '../../assets/neonsulphur/circulo.jpg';
import imagenFinal4 from '../../assets/neonsulphur/circulo2.jpg';
import imagenFinal5 from '../../assets/neonsulphur/ciervo.jpg';
import imagenFinal6 from '../../assets/neonsulphur/luna.jpg';

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #c8b3ee;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #999;
  border-left: 3px solid #c8b3ee;
  padding-left: 15px;
  margin: 20px 0;
`;

const ImagePairWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`;

const PairTitle = styled.h3`
  color: #c8b3ee;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

const MusicLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const MusicButton = styled.a`
  background: #c8b3ee;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: #b29cdd;
  }
`;

const ModalFondo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ImagenAmpliada = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
  margin-bottom: 10px;
`;

const ImageLabel = styled.span`
  color: white;
`;

const BotonFlecha = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1001;
  &:hover {
    color: #c8b3ee;
  }
`;

const FlechaIzquierda = styled(BotonFlecha)` left: 20px; `;
const FlechaDerecha = styled(BotonFlecha)` right: 20px; `;

const Proyecto1 = () => {
  const grupos = [
    { titulo: 'Calavera y Cuervo', imagenes: [imagenFinal1, imagenFinal2] },
    { titulo: 'Sello Alquímico I y II', imagenes: [imagenFinal3, imagenFinal4] },
    { titulo: 'Ciervo y Luna', imagenes: [imagenFinal5, imagenFinal6] },
  ];

  const [indiceActivo, setIndiceActivo] = useState(null);
  const imagenesPlanas = grupos.flatMap(grupo => grupo.imagenes);

  const abrirModal = (index) => setIndiceActivo(index);
  const cerrarModal = () => setIndiceActivo(null);

  const mostrarAnterior = (e) => {
    e.stopPropagation();
    setIndiceActivo((prev) => (prev === 0 ? imagenesPlanas.length - 1 : prev - 1));
  };

  const mostrarSiguiente = (e) => {
    e.stopPropagation();
    setIndiceActivo((prev) => (prev === imagenesPlanas.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <Container>
        <Title>Ilustraciones para Neon Sulphur – EP Conceptual</Title>
        <Subtitle>Ilustración de merchandising para un concept album, con estética alquímica y neón futurista.</Subtitle>

        <Section>
          <Paragraph><strong>Cliente:</strong> Neon Sulphur, artista emergente de música electrónica experimental.</Paragraph>
          <Paragraph><strong>Encargo:</strong> Crear 6 ilustraciones para merchandising del EP conceptual.</Paragraph>
          <Paragraph><strong>Herramientas utilizadas:</strong> Procreate (iPad), referencias visuales proporcionadas por la artista.</Paragraph>

          <Quote>
            “Corre el año 2077. Un humano, reciente creador de la Máquina del Tiempo, ha viajado al año 1636, cuando aún existía la Alquimia, llevando allí toda la Tecnología de su Era...”
          </Quote>
        </Section>

        <Section>
          <h3>Concepto y dirección artística</h3>
          <Paragraph>El imaginario visual se basa en una fusión de símbolos alquímicos, estética japonesa futurista, colores neón y elementos de ciencia retrofuturista.</Paragraph>

          {grupos.map((grupo, grupoIndex) => (
            <ImagePairWrapper key={grupoIndex}>
              <PairTitle>{grupo.titulo}</PairTitle>
              <ImageRow>
                {grupo.imagenes.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`${grupo.titulo} - imagen ${i + 1}`}
                    onClick={() => abrirModal(grupoIndex * 2 + i)}
                  />
                ))}
              </ImageRow>
            </ImagePairWrapper>
          ))}
        </Section>

        <Section>
          <h3>Aplicación en merchandising</h3>
          <Paragraph>Las ilustraciones se usaron para láminas impresas en A4, posters promocionales y packaging del EP.</Paragraph>
        </Section>

        <Section>
          <h3>Escucha el EP</h3>
          <Paragraph>Disponible en las principales plataformas:</Paragraph>
          <MusicLinks>
            <MusicButton href="#" target="_blank">Spotify</MusicButton>
            <MusicButton href="#" target="_blank">Apple Music</MusicButton>
            <MusicButton href="#" target="_blank">SoundCloud</MusicButton>
          </MusicLinks>
        </Section>

        {indiceActivo !== null && (
          <ModalFondo onClick={cerrarModal}>
            <FlechaIzquierda onClick={mostrarAnterior}>&lt;</FlechaIzquierda>
            <ImagenAmpliada src={imagenesPlanas[indiceActivo]} />
            <ImageLabel>
              <strong>{grupos[Math.floor(indiceActivo / 2)].titulo}</strong><br />
              {imagenesPlanas[indiceActivo].split('/').pop().replace(/\.[^/.]+$/, '')}
            </ImageLabel>
            <FlechaDerecha onClick={mostrarSiguiente}>&gt;</FlechaDerecha>
          </ModalFondo>
        )}
      </Container>
    </Layout>
  );
};

export default Proyecto1;
