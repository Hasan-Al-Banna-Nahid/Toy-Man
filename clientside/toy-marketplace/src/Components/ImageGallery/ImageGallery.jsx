/* eslint-disable no-unused-vars */
import React from "react";
import LazyLoad from "react-lazy-load";

const ImageGalleries = () => {
  return (
    <div className="my-12">
      <div
        className="my-6"
        data-aos="zoom-out-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl font-semibold text-center text-[#130f40]">
          Toys Gallery
        </h1>
      </div>
      <div
        className="grid gap-4 lg:ms-48"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-6">
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/1.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/2.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/3.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/4.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/5.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/6.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
          </div>
          <div className="lg:grid flex md:ms-12 gap-12 ">
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/7.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../Assests/Gallery/8.jpg"
                  alt=""
                />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleries;
