import React from "react";
import Slider from "react-slick";
import "./sliderHome.css";
function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    pausehOnHover: true,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`sliderHome `}>
        <div className="slider-container">
          <Slider {...settings}>
          <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 5.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
            <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 8.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
            <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 7.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
            <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 6.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
            <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 9.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
            <div className="sliderdiv">
              <div className="slider">
                <img src="/imges/asset 10.jpeg" alt=".." />
                <span></span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
  );
}

export default SliderHome;
