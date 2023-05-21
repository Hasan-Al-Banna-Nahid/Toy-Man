/* eslint-disable no-unused-vars */
import React from "react";
import "./Banner.css";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <div>
      <div className="carousel common-carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <LazyLoad height={600}>
            <img src="../Assests/toy1.jpg" className="w-full h-auto" />
          </LazyLoad>
        </div>
        <div id="item2" className="carousel-item w-full">
          <LazyLoad height={600}>
            <img src="../Assests/toy2.jpg" className="w-full h-auto" />
          </LazyLoad>
        </div>
        <div id="item3" className="carousel-item w-full">
          <LazyLoad height={600}>
            <img src="../Assests/toy3.jpg" className="w-full h-auto" />
          </LazyLoad>
        </div>
        <div id="item4" className="carousel-item  w-full">
          <LazyLoad height={600}>
            <img src="../Assests/toy4.jpg" className="w-full h-auto" />
          </LazyLoad>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
