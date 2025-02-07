import { useState, useEffect } from 'react';
import './slider.css';
import images from './images';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const interval = 3000;

  const updateVisibleImages = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 500) {
      setVisibleImages(1)
    } else if (screenWidth >= 750 && screenWidth <= 900) {
      setVisibleImages(3)
    } else {
      setVisibleImages(3)
    }
  };

  useEffect(() => {
    updateVisibleImages();

    window.addEventListener('resize', updateVisibleImages);

    return () => {
      window.removeEventListener('resize', updateVisibleImages);
    };
  }, []);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoPlay);
  }, [currentIndex, visibleImages, interval]);

  const displayedImages = images.slice(currentIndex, currentIndex + visibleImages);

  return (
    <div className="carousel">
      <div className="slide-container">
        {displayedImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${currentIndex + index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
