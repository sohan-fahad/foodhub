import React from "react";
import Blogs from "../Blogs/Blogs";
import DownloadApp from "../DownloadApp/DownloadApp";
import FoodHubBusiness from "../FoodHubBusiness/FoodHubBusiness";
import HeroBox from "../HeroBox/HeroBox";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import ServiceCities from "../ServiceCities/ServiceCities";
import WorkProcess from "../WorkProcess/WorkProcess";

const Home = () => {
  return (
    <div>
      <HeroBox></HeroBox>
      <WorkProcess></WorkProcess>
      <RestaurantInfo></RestaurantInfo>
      <ServiceCities></ServiceCities>
      <DownloadApp></DownloadApp>
      <Blogs></Blogs>
      <FoodHubBusiness></FoodHubBusiness>
    </div>
  );
};

export default Home;
