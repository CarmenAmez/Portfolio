import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const ArtGrid = styled.div`
  column-count: 4;
  column-gap: 16px;
  padding: 2rem 3rem;
  transition: filter 0.3s;

  &.blurred {
    filter: blur(8px);
    pointer-events: none;
    user-select: none;
  }

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

const ArtCardWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
  break-inside: avoid;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  &:hover .hover-overlay {
    opacity: 1;
  }
`;

const ArtCardImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`;

const OverlayText = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 0 1rem;
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  flex-direction: column;
`;

const FullscreenImg = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  background: #fff;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 32px;
  right: 32px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1100;
`;

const NavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1100;

  ${(props) => (props.direction === 'left' ? 'left: 32px;' : 'right: 32px;')}
`;

const FullscreenCaption = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const ThumbnailRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 1rem;
  max-width: 90vw;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Thumbnail = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  &.active {
    opacity: 1;
    border-color: white;
    box-shadow: 0 0 8px white;
  }
`;
const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  max-width: 90vw;
  margin-top: 1rem;
`;

const ArrowButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 0.5rem;
  z-index: 10;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 0;
  }
`;

const ArtCSSMasonry = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeViewer = () => setSelectedIndex(null);

    const showPrev = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const showNext = () => {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    const thumbnailRef = useRef();

    const scrollThumbnails = (direction) => {
        if (thumbnailRef.current) {
            const scrollAmount = 200; // píxeles por clic
            thumbnailRef.current.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {selectedIndex !== null && (
                <FullscreenOverlay onClick={closeViewer}>
                    <FullscreenImg
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].title || `art-${selectedIndex}`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <FullscreenCaption>{images[selectedIndex].title}</FullscreenCaption>
                    <ThumbnailWrapper onClick={(e) => e.stopPropagation()}>
                        <ArrowButton onClick={() => scrollThumbnails(-1)}>‹</ArrowButton>

                        <ThumbnailRow ref={thumbnailRef}>
                            {images.map((img, idx) => (
                                <Thumbnail
                                    key={idx}
                                    src={img.src}
                                    alt={img.title}
                                    className={idx === selectedIndex ? 'active' : ''}
                                    onClick={() => setSelectedIndex(idx)}
                                />
                            ))}
                        </ThumbnailRow>

                        <ArrowButton onClick={() => scrollThumbnails(1)}>›</ArrowButton>
                    </ThumbnailWrapper>
                    <ThumbnailRow onClick={(e) => e.stopPropagation()}>
                        {images.map((img, idx) => (
                            <Thumbnail
                                key={idx}
                                src={img.src}
                                alt={img.title}
                                className={idx === selectedIndex ? 'active' : ''}
                                onClick={() => setSelectedIndex(idx)}
                            />
                        ))}
                    </ThumbnailRow>
                    <CloseButton onClick={closeViewer}>✕</CloseButton>
                    <NavButton direction="left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
                        ←
                    </NavButton>
                    <NavButton direction="right" onClick={(e) => { e.stopPropagation(); showNext(); }}>
                        →
                    </NavButton>
                </FullscreenOverlay>
            )}

            <ArtGrid className={selectedIndex !== null ? 'blurred' : ''}>
                {images.map((image, index) => (
                    <ArtCardWrapper key={index} onClick={() => setSelectedIndex(index)}>
                        <ArtCardImg src={image.src} alt={image.title || `art-${index}`} loading="lazy" />
                        <HoverOverlay className="hover-overlay">
                            <OverlayText>{image.title}</OverlayText>
                        </HoverOverlay>
                    </ArtCardWrapper>
                ))}
            </ArtGrid>
        </>
    );
};

ArtCSSMasonry.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            title: PropTypes.string,
        })
    ).isRequired,
};

export default ArtCSSMasonry;