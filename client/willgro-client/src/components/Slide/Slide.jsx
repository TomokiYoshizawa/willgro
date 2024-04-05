/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import photo1 from "../../assets/image/slide1.png";
import photo2 from "../../assets/image/slide2.png";
import photo3 from "../../assets/image/slide3.png";

import "./Slide.scss";

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [photo1, photo2, photo3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slide">
      <div className="slide__container">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slidephoto ${index + 1}`}
            className={`slide__photo ${currentSlide === index ? "active" : ""}`}
            style={{ display: currentSlide === index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;
