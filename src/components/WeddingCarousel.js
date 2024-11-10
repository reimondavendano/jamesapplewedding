import React, { useState, useEffect } from 'react';
import song from '../assets/audio/palagi.mp3'
import AudioPlayer from './AudioPlayer';


const WeddingCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`carousel-slide-${currentIndex}`} />
      </div>
      <AudioPlayer src={song} />
    </div>
  );
};

export default WeddingCarousel;