import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtGrid = styled.div`
column-count: 4;
column-gap: 5px;
  padding: 2rem 3rem; /* Más margen lateral */

@media (max-width: 1100px) {
    column-count: 3;
}

@media (max-width: 700px) {
    column-count: 2;
}

@media (max-width: 500px) {
    column-count: 1;
}
`;

const ArtCard = styled.div`
background-color: #fff;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 5px;
overflow: hidden;
position: relative;
break-inside: avoid;

img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

&:hover img {
    transform: scale(1.03);
}

.overlay {
position: absolute;
inset: 0;
background-color: rgba(0, 0, 0, 0.4);
opacity: 0;
display: flex;
align-items: center;
justify-content: center;
transition: opacity 0.3s ease;
}

&:hover .overlay {
    opacity: 1;
}

.overlay-text {
color: #fff;
font-size: 1.2rem;
font-weight: bold;
text-align: center;
padding: 0 1rem;
}
`;

const ArtCSSMasonry = ({ images }) => {
    ArtCSSMasonry.propTypes = {
        images: PropTypes.node
    };

    return (
        <ArtGrid>
            {images.map((image, index) => (
                <ArtCard key={index}>
                    <img src={image.src} alt={image.title || `art-${index}`} />
                    <div className="overlay">
                        <div className="overlay-text">{image.title}</div>
                    </div>
                </ArtCard>
            ))}
        </ArtGrid>
    );
};


export default ArtCSSMasonry;
