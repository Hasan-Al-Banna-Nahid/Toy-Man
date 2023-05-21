/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold">Shop By Category</h2>
      <div className="flex md:flex-col lg:flex-row lg:justify-center shop my-8">
        <Tabs>
          <TabList className="lg:text-3xl  category">
            <Tab>Comic Toys</Tab>
            <Tab>Girls Toys</Tab>
            <Tab>Neutral Toys</Tab>
          </TabList>

          <TabPanel className="my-6">
            <div className="flex comic flex-row gap-4 lg:justify-center">
              <div>
                <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/Sheriff_Woody.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Mr.Woody!</h2>
                    <p className="text-lg">Price : 100$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/Buzz_Lightyear.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Mr.Buzz!</h2>
                    <p className="text-lg">Price : 120$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex girls lg:justify-center flex-row">
              <div>
                <div className="card h-5/6 mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/Gallery/1.jpg"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Ms.Fairy!</h2>
                    <p className="text-lg">Price : 200$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card h-5/6  mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/Gallery/2.jpg"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Princess Frozen!</h2>
                    <p className="text-lg">Price : 220$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex neutral flex-row gap-4 lg:justify-center">
              <div>
                <div className="card h-5/6 mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/Mrs._Potato_Head_ts3.webp"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Ms.Potato!</h2>
                    <p className="text-lg">Price : 90$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card h-5/6 mx-auto w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="../Assests/LotsOHugginBear.webp"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">fatso Lotso!</h2>
                    <p className="text-lg">Price : 150$</p>
                    <p className="text-lg">Rating : 10/10</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
