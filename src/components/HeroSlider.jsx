import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div className="slide">
          <img src="src/assets/slider-1.jpg" alt="Slider-1" />
        </div>
        <div className="slide">
          <img src="src/assets/slider-2.jpg" alt="Slider-2" />
        </div>
        <div className="slide">
          <img src="src/assets/slider-3.jpg" alt="Slider-3" />
        </div>
        <div className="slide">
          <img src="src/assets/slider-4.jpg" alt="Slider-4" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
