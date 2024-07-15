import React, { useState, useEffect } from 'react';
import './Credenzacarousel.css';
import image1 from '../assets/carouselimages/image.jpg';
import image2 from '../assets/carouselimages/image4.jpg';
import image3 from '../assets/carouselimages/image3.jpg';

function Credenzacarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const items = [
    {
      imgSrc: image1,
      altText: "First slide"
    },
    {
      imgSrc: image2,
      altText: "Second slide"
    },
    {
      imgSrc: image3,
      altText: "Third slide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % items.length);
        setIsSliding(false);
      }, 600); // Match transition duration in CSS
    }
  };

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
        setIsSliding(false);
      }, 600); // Match transition duration in CSS
    }
  };

  const handleIndicatorClick = (index) => {
    if (!isSliding) {
      setCurrentIndex(index);
    }
  };

  return (
    <div id="myCarousel" className="carousel slide mb-6">
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentIndex ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + items.length) % items.length ? 'carousel-item-prev' : ''} ${index === (currentIndex + 1) % items.length ? 'carousel-item-next' : ''}`}
          >
            <div className="container">
              <img src={item.imgSrc} alt={item.altText} className="carousel-image" width="100%" height="100%" />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Credenzacarousel;
