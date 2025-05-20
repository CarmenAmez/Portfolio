// src/pages/Home.jsx
import styled from "styled-components";
import perfil from "../assets/burn.png";
import Layout from "../components/Layout";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
`;

const Foto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fdcae1;
  margin-bottom: 20px;
`;

const Nombre = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 10px;
  color: #333;
  align-items: flex-start;
`;

const Profesion = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #c8b3ee;
  margin-bottom: 30px;
  align-items: end;
`;

const SobreMi = styled.p`
  max-width: 900px;
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 12px;
`;

const Botonera = styled.div`
  display: flex;
  gap: 20px;
`;

const Boton = styled.a`
  background-color: #fbd160;
  color: black;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
    return (
        <Layout>
            <Nombre>Carmen Sas Amez</Nombre>
            <Profesion>Programadora Frontend · Diseñadora UX/UI</Profesion>
            <Foto src={perfil} alt="Foto de Carmen" />
<HomeContainer>   
            <SobreMi>
                A lo largo de mi trayectoria he aprendido que adaptarse no es solo cambiar, sino también escuchar, entender y aportar. Me considero una persona empática, con la capacidad de ponerme en el lugar del otro para construir relaciones de trabajo sanas y efectivas. Disfruto creando ideas, buscando soluciones distintas y aprendiendo constantemente, porque creo que todo desafío es una oportunidad de crecer. He trabajado con equipos muy diversos y eso me ha llevado a desarrollar un liderazgo situacional: saber cuándo guiar, cuándo apoyar y cuándo dejar que otros brillen. Valoro mucho el trabajo en equipo, la creatividad compartida y el aprendizaje continuo como motores reales de cualquier proyecto.
            </SobreMi>
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
