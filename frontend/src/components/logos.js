import React, { useEffect, useState } from 'react';
import '../styles/Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import { images } from './data';

const Logos = () => {
  const [chunkSize, setChunkSize] = useState(7);

  const chunks = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 576) {
        setChunkSize(3);
      } else if (screenWidth <= 768) {
        setChunkSize(4);
      } else {
        setChunkSize(7);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageChunks = chunks(images, chunkSize);

  return (
    <div className="carouselDiv">
      <div className="d-flex justify-content-center">
        <div className="kunde text-center d-flex align-items-center justify-content-center text-white">
          <h2>Unsere Kunde</h2>
        </div>
      </div>
      <Carousel>
        {imageChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between">
              {chunk.map((image, subIndex) => (
                <a key={subIndex} href={image.link} target="_blank" rel="noopener noreferrer">
                  <img className="carousel-image" src={image.src} alt="" />
                </a>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Logos;
