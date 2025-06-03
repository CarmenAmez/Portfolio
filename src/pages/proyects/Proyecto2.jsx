import { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import logoFinal from '../../assets/peluqueria/LogoPelu.png';
import prototipo1 from '../../assets/peluqueria/Logo 1.png';
import prototipo2 from '../../assets/peluqueria/Logo 2.png';
import prototipo22 from '../../assets/peluqueria/Logo 2.2.png';
import prototipo3 from '../../assets/peluqueria/Logo 3.png';
import prototipo33 from '../../assets/peluqueria/Logo 3.3.png';
import uso1 from '../../assets/peluqueria/PosterPelu.png';
import uso2 from '../../assets/peluqueria/ig.png';

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
const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
`;
const Section = styled.section`
  margin-bottom: 40px;
`;
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 60px;
`;
const ImageTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #fbd160;
  margin-bottom: 20px;
`;
const SingleImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageLabel = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
`;
const Image = styled.img`
  width: 60%;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const ModalImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
`;
const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1000;
`;
const ImageWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  display: inline-block;
`;
const LabelBelow = styled.p`
  color: black;
  margin-top: 10px;
  text-align: center;
`;
const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhoneMockup = styled.div`
  width: 250px;
  height: 500px;
  background: #000;
  border-radius: 40px;
  padding: 20px 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  margin-top:15px;
    display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: #666;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`;


const Proyecto2 = () => {
  const images = [
    { src: prototipo1, label: 'Versión con fondo oscuro y detalle en dorado' },
    { src: prototipo2, label: 'Versión con fondo claro y detalle en negro' },
    { src: prototipo22, label: 'Versión con fondo oscuro y detalle en blanco' },
    { src: prototipo3, label: 'Versión con fondo claro y detalle en negro' },
    { src: prototipo33, label: 'Versión con fondo oscuro y detalle en blanco' },
    { src: logoFinal, label: 'Logotipo definitivo en estilo minimalista (png sin fondo)' },
    { src: uso1, label: 'Aplicación del logotipo en cartel del salón de prácticas' },
    { src: uso2, label: 'Uso del logotipo en otro cartel en Instagram' }
  ];

  const [modalIndex, setModalIndex] = useState(null);

  const closeModal = () => setModalIndex(null);
  const showPrev = () => setModalIndex((modalIndex - 1 + images.length) % images.length);
  const showNext = () => setModalIndex((modalIndex + 1) % images.length);

  const modalContent = modalIndex !== null && (
    <Overlay onClick={closeModal}>
      <ArrowButton style={{ left: '20px' }} onClick={(e) => { e.stopPropagation(); showPrev(); }}>&larr;</ArrowButton>
      <div>
        <ImageWrapper onClick={(e) => e.stopPropagation()}>
          <ModalImage src={images[modalIndex].src} alt={`Imagen ampliada ${modalIndex}`} />
          <LabelBelow>{images[modalIndex].label}</LabelBelow>
        </ImageWrapper>
      </div>
      <ArrowButton style={{ right: '20px' }} onClick={(e) => { e.stopPropagation(); showNext(); }}>&rarr;</ArrowButton>
      <CloseButton onClick={closeModal}>&times;</CloseButton>
    </Overlay>
  );

  return (
    <>
      <Layout>
        <Container>
          <Title>Diseño de logotipo – Peluquería “A 180 grados”</Title>
          <Subtitle>Identidad visual moderna para el salón de prácticas del CFGM de Peluquería y Cosmética Capilar.</Subtitle>

          <Section>
            <Paragraph><strong>Cliente:</strong> Estudiantes del Ciclo Formativo de Grado Medio en Peluquería y Cosmética Capilar.</Paragraph>
            <Paragraph><strong>Encargo:</strong> Diseñar el logotipo para su peluquería de prácticas, un espacio formativo abierto al público con precios reducidos.</Paragraph>
            <Paragraph><strong>Objetivo:</strong> Crear una identidad visual sobria, moderna y fácilmente aplicable a diferentes soportes (cartelería, tarjetas, redes sociales).</Paragraph>
          </Section>

          <Section>
            <h3>Concepto y diseño</h3>
            <Paragraph>
              El nombre “A 180 grados” sugiere un cambio radical, algo transformador —ideal para una peluquería. Para el diseño, exploré tipografías limpias y jugué con la geometría de los números: una línea horizontal en el “1” lo transforma visualmente en una “A”, y una barra en el “0” evoca una “G”, creando así un logotipo sutil y simbólico.
            </Paragraph>
            <Paragraph>
              Se realizaron varias propuestas con variantes cromáticas y fondos, incluyendo tonos dorados para aportar un toque de sofisticación. Finalmente, se optó por la versión más minimalista para facilitar su implementación en múltiples formatos.
            </Paragraph>
            <ImageSection>
              <ImageTitle>Prototipos de diseño</ImageTitle>

              {/* Fila de 3 imágenes arriba */}
              <ImageRow style={{ justifyContent: 'center', gap: '40px' }}>
                {images.slice(0, 3).map((img, index) => (
                  <SingleImage key={index}>
                    <ImageLabel>{img.label}</ImageLabel>
                    <Image src={img.src} alt={`Imagen ${index}`} onClick={() => setModalIndex(index)} />
                  </SingleImage>
                ))}
              </ImageRow>

              {/* Fila de 2 imágenes abajo, desplazadas hacia los lados (forma de V) */}
              <ImageRow style={{ justifyContent: 'space-around', maxWidth: '700px', margin: '30px auto 0' }}>
                {images.slice(3, 5).map((img, index) => (
                  <SingleImage key={index + 3}>
                    <ImageLabel>{img.label}</ImageLabel>
                    <Image src={img.src} alt={`Imagen ${index + 3}`} onClick={() => setModalIndex(index + 3)} />
                  </SingleImage>
                ))}
              </ImageRow>
            </ImageSection>

            <ImageSection>
              <ImageTitle>Versión final</ImageTitle>
              <SingleImage>
                <ImageLabel>{images[5].label}</ImageLabel>
                <Image src={images[5].src} alt="Logotipo final de A 180 grados" onClick={() => setModalIndex(5)} style={{ width: '60%' }} />
              </SingleImage>
            </ImageSection>

            <ImageSection>
              <ImageTitle>Aplicación real del logotipo</ImageTitle>
              <ImageRow >
                <SingleImage>
                  <ImageLabel>Uso del logotipo en otro cartel en Instagram</ImageLabel>
                  <PhoneMockup>
                    <Image
                      src={images[7].src}
                      alt="Uso real logotipo en Instagram"
                      onClick={() => setModalIndex(7)}/>
                  </PhoneMockup>
                </SingleImage>
              </ImageRow>
            </ImageSection>

          </Section>
        </Container>
      </Layout>
      {createPortal(modalContent, document.getElementById('modal-root'))}
    </>
  );
};

export default Proyecto2;
