import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderProductsPreeSell() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    
  return (
    <div className="slider-container">
    <h2> Resizable Collapsible </h2>
    <button className="button" onClick={() => setWidth(width + 100)}>
      {" "}
      increase{" "}
    </button>
    <button className="button" onClick={() => setWidth(width - 100)}>
      {" "}
      decrease{" "}
    </button>
    <button className="button" onClick={() => setDisplay(!display)}>
      {" "}
      toggle{" "}
    </button>
    <div
      style={{
        width: width + "px",
        display: display ? "block" : "none"
      }}
    >
      <Slider {...settings}>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
        <div>
          <h3><img src="./Images/slider1.webp"></img></h3>
        </div>
      </Slider>
    </div>
  </div>
  )
}

export default SliderProductsPreeSell;

