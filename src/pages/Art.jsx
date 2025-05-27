import Layout from '../components/Layout';
import ArtCSSMasonry from '../components/ArtCSSMasonry';

import img2 from '../assets/abuela.png';
import img3 from '../assets/aleatorio.png';
import img4 from '../assets/bonsai.png';
import img6 from '../assets/calaserpi.png';
import img7 from '../assets/caset.png';
import img8 from '../assets/chip.png';
import img9 from '../assets/corazón.png';
import img11 from '../assets/cuervo.png';
import img12 from '../assets/delia.png';
import img13 from '../assets/diablo.png';
import img15 from '../assets/gato.png';
import img16 from '../assets/güelito.png';
import img17 from '../assets/gusgus.png';
import img18 from '../assets/hamburguesa.png';
import img19 from '../assets/ines.png';
import img20 from '../assets/libro.jpeg';
import img21 from '../assets/lobo.png';
import img22 from '../assets/magia.png';
import img23 from '../assets/manos.png';
import img25 from '../assets/nina.png';
import img26 from '../assets/pajaro.jpg';
import img27 from '../assets/pascual.png';
import img29 from '../assets/ratón.png';
import img31 from '../assets/rosa.png';
import img32 from '../assets/rubia.png';
import img33 from '../assets/serpiente.png';
import img34 from '../assets/setas.png';
import img35 from '../assets/sombra.png';
import img36 from '../assets/ventana.png';

const images = [
    { src: img2, title: 'Retrado de un pedido personal' },
    { src: img3, title: 'Aleatorio' },
    { src: img4, title: 'Bonsái' },
    { src: img6, title: 'Calaserpi' },
    { src: img7, title: 'Caset' },
    { src: img8, title: 'Chip de La Bella y la Bestia' },
    { src: img9, title: 'Corazón' },
    { src: img11, title: 'Cuervo' },
    { src: img12, title: 'Delia' },
    { src: img13, title: 'Diablo' },
    { src: img15, title: 'Gato' },
    { src: img16, title: 'Güelito' },
    { src: img17, title: 'Gusgus' },
    { src: img18, title: 'Hamburguesa' },
    { src: img19, title: 'Inés' },
    { src: img20, title: 'Libro' },
    { src: img21, title: 'Lobo' },
    { src: img22, title: 'Magia' },
    { src: img23, title: 'Manos' },
    { src: img25, title: 'Niña' },
    { src: img26, title: 'Pájaro' },
    { src: img27, title: 'Pascal' },
    { src: img29, title: 'Ratón' },
    { src: img36, title: 'Ventana' },
    { src: img31, title: 'Rosa' },
    { src: img32, title: 'Rubia' },
    { src: img33, title: 'Serpiente' },
    { src: img34, title: 'Setas' },
    { src: img35, title: 'Sombra' },

];

const Art = () => {
    return (
        <Layout>
            <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Arte</h1>
            <ArtCSSMasonry images={images} />
        </Layout>
    );
};

export default Art;