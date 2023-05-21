/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import FeaturedToys from "../FeaturedToys/FeacturedToys";
import ShopByAge from "../ShopByAge/ShopByAge";
import ImageGalleries from "../ImageGallery/ImageGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedToys />
      <ShopByCategory />
      <ImageGalleries />
      <ShopByAge />
      <Footer />
    </div>
  );
};

export default Home;
