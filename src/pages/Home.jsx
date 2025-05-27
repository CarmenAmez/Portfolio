import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import perfil from "../assets/burn.png";
import Layout from "../components/Layout";

const frases = [
  "Adaptarse no es solo cambiar, sino también escuchar, entender y aportar.",
  "Soy una persona empática, capaz de ponerme en el lugar del otro para construir relaciones de trabajo sanas y efectivas.",
  "Disfruto creando ideas, buscando soluciones distintas y aprendiendo constantemente.",
  "Creo que todo desafío es una oportunidad para crecer.",
  "He trabajado con equipos muy diversos y he desarrollado un liderazgo situacional: saber cuándo guiar, cuándo apoyar y cuándo dejar que otros brillen.",
  "Valoro el trabajo en equipo, la creatividad compartida y el aprendizaje continuo como motores reales de cualquier proyecto.",
];

// ANIMACIÓN DE FONDO - blobs chill
const mover = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -10px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FondoAnimado = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 300px;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 90vw;
    height: 240px;
    top: 40%;
  }

  div {
    position: absolute;
    border-radius: 50%;
    opacity: 0.4;
    animation: ${mover} 8s ease-in-out infinite alternate;
    transition: transform 1s ease-in-out;
  }

  .blob1 {
    width: 160px;
    height: 160px;
    background-color: #ffd1dc;
    top: 30px;
    left: -60px;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      top: 10px;
      left: 0;
    }
  }

  .blob2 {
    width: 180px;
    height: 180px;
    background-color: #c8b3ee;
    top: 140px;
    left: 550px;
    animation-delay: 4s;

    @media (max-width: 768px) {
      width: 140px;
      height: 140px;
      top: 160px;
      left: auto;
      right: 0;
    }
  }

  .blob3 {
    width: 140px;
    height: 140px;
    background-color: #fbd160;
    top: 200px;
    left: 100px;
    animation-delay: 2s;

    @media (max-width: 768px) {
      width: 140px;
      height: 140px;
      top: 130px;
      left: 30px;
    }
  }

  .blob4 {
    width: 150px;
    height: 150px;
    background-color: #CAF1CA;
    top: 20px;
    left: 600px;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      top: 40px;
      left: auto;
      right: 40px;
    }
  }
`;

const Presentacion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const ContenedorFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Foto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fdcae1;
`;

const InfoTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Nombre = styled.h1`
  font-size: 3.6rem;
  margin: 0 0 10px 0;
  color: #333;

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const Profesion = styled.h2`
  font-size: 1.6rem;
  font-weight: normal;
  color: #c8b3ee;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Carrusel = styled.div`
  max-width: 800px;
  min-height: 120px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.6);
  padding: 30px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  font-size: 1.2rem;
  color: #333;
`;

const Controles = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Punto = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $activo }) => ($activo ? "#fbd160" : "#eee")};
  cursor: pointer;
  transition: background 0.3s;
`;

const Botonera = styled.div`
  display: flex;
  gap: 20px;
  z-index: 1;
  margin-top: 100px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Boton = styled.a`
  background-color: #fbd160;
  color: #7d6931;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
  const [indice, setIndice] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice(i => (i + 1) % frases.length);
    }, 6000);
    return () => clearInterval(intervalo);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distancia = touchStartX - touchEndX;

    if (distancia > 50) {
      setIndice((prev) => (prev + 1) % frases.length); // Swipe izquierda
    } else if (distancia < -50) {
      setIndice((prev) => (prev - 1 + frases.length) % frases.length); // Swipe derecha
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <Layout>
      <HomeContainer>
        <Presentacion>
          <ContenedorFoto>
            <Foto src={perfil} alt="Foto de Carmen" />
          </ContenedorFoto>
          <InfoTexto>
            <Nombre>Carmen Sas Amez</Nombre>
            <Profesion>Programadora Frontend · Diseñadora UX/UI</Profesion>
          </InfoTexto>
        </Presentacion>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Carrusel>{frases[indice]}</Carrusel>
        </div>

        <FondoAnimado>
          <div className="blob1" />
          <div className="blob2" />
          <div className="blob3" />
          <div className="blob4" />
        </FondoAnimado>

        <Controles>
          {frases.map((_, i) => (
            <Punto key={i} onClick={() => setIndice(i)} $activo={i === indice} />
          ))}
        </Controles>

        <Botonera>
          <Boton href="https://www.linkedin.com/in/carmenamez" target="_blank" rel="noopener noreferrer">LinkedIn</Boton>
          <Boton href="https://github.com/CarmenAmez" target="_blank" rel="noopener noreferrer">GitHub</Boton>
          <Boton href="/cv.pdf" target="_blank" rel="noopener noreferrer">Ver CV</Boton>
        </Botonera>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
