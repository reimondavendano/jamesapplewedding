import React, { useState, useEffect } from 'react';

const BackgroundCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    transition: 'background-image 1s ease-in-out',
  };

  const targetDate = "2025-02-14T23:59:59"; // Target date and time

  return <div className="banner" style={backgroundStyle} role="banner" data-stellar-background-ratio="0.5">
           <div className="overlay"></div>
        </div>
};

export default BackgroundCarousel;