import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Import the CSS file

const Carousel = ({ img1, img2, img3 }) => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = currentIndex+1;
      setCurrentIndex(newIndex);
      if(currentIndex==images.length-1){
        setCurrentIndex(0);
      }
    }, 3000); // Set your desired interval in milliseconds

    return () => clearInterval(intervalId);
  }, [currentIndex, setCurrentIndex]);

  return (
    <div className="carousel">
      {/* Render all images with absolute positioning */}
      {images.map((image, imageIndex) => (
        <img
          key={imageIndex}
          src={image}
          className={imageIndex === currentIndex ? 'active' : 'inactive'}
          style={{ transition: `transform 0.5s ease-in-out` }} // Set transition for animation
        />
      ))}
    </div>
  );
};

export default Carousel;
