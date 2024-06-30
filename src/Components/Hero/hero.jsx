import React from "react";
import { useTypewriter } from 'react-simple-typewriter';
import image1 from '../../Assets/Images/carousel1.jpg';
import image2 from '../../Assets/Images/carousel2.jpg';
import image3 from '../../Assets/Images/carousel3.jpg';
import Carousel from "../Caraousal/Carousel";
import "./hero.css";





const Hero = () => {

    const [text, count] = useTypewriter({
        words: ['UI/UX', 'React Components', 'Responsive Design'],
        loop: true,
        delaySpeed: 1000,
        deleteSpeed: 50,
      });

  return (

    <div className="hero-comp" id="home-page">
      <div className="hero-left">
          <h1>build with</h1>
          <h1>us</h1>
          <p className="hero-typewriter"><span>{text}</span></p>
          <button>Join Us</button>
        </div>
      <div className="hero-right">
        <div className="right-bg">

        </div>
        <div className="right-main">
        <Carousel img1={image1} img2={image2} img3={image3} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
