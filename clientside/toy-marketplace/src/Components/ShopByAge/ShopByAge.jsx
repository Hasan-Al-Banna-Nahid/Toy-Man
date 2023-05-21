/* eslint-disable no-unused-vars */
import React from "react";
import LazyLoad from "react-lazy-load";

const ShopByAge = () => {
  return (
    <div className="my-12">
      <div data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear">
        <h2 className="text-4xl text-center my-12  font-semibold text-[#130f40]">
          Shop By Age
        </h2>
      </div>
      <div
        className="grid lg:grid-cols-3 lg:ms-16"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <div>
          <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                <img
                  src="../Assests/0-2years.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">1- 2 Years!</h2>

              <div className="card-actions">
                <button className="btn btn-outline btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card h-5/6 my-4   w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <LazyLoad>
                  <img
                    src="../Assests/2-4 years.png"
                    alt="Shoes"
                    className="rounded-xl "
                  />
                </LazyLoad>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">
                  2 - 4 Years!
                </h2>

                <div className="card-actions">
                  <button className="btn btn-outline btn-success">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card h-5/6 my-6 w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <LazyLoad>
                  <img
                    src="../Assests/4-6 years.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </LazyLoad>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">
                  4 - 6 Years!
                </h2>

                <div className="card-actions">
                  <button className="btn btn-outline btn-success">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card h-5/6 my-6  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <LazyLoad>
                  <img
                    src="../Assests/6-8_years-removebg-preview.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </LazyLoad>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">
                  6 - 8 Years!
                </h2>

                <div className="card-actions">
                  <button className="btn btn-outline btn-success">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6 my-6  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                <img
                  src="../Assests/running-boy-b8etcWM1-removebg-preview.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">
                {" "}
                8 - 10 Years!
              </h2>

              <div className="card-actions">
                <button className="btn btn-outline btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <LazyLoad>
                <img
                  src="../Assests/10-12 years.jpg"
                  alt="Shoes"
                  className="rounded-xl my-12"
                />
              </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">
                10 - 12 Years!
              </h2>

              <div className="card-actions">
                <button className="btn btn-outline btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByAge;
