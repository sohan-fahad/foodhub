import React, { useEffect } from "react";
import useApi from "../../../Hooks/useApi";
import Blogs from "../Blogs/Blogs";
import DownloadApp from "../DownloadApp/DownloadApp";
import FoodHubBusiness from "../FoodHubBusiness/FoodHubBusiness";
import HeroBox from "../HeroBox/HeroBox";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import ServiceCities from "../ServiceCities/ServiceCities";
import Vendor from "../Vendor/Vendor";
import WorkProcess from "../WorkProcess/WorkProcess";

const Home = () => {

  console.log("first")

  return (
    <div>
      <HeroBox></HeroBox>
      <RestaurantInfo></RestaurantInfo>
      <ServiceCities></ServiceCities>
      {/* <WorkProcess></WorkProcess> */}
      <DownloadApp></DownloadApp>
      <FoodHubBusiness></FoodHubBusiness>
      {/* <Blogs></Blogs> */}
    </div>
  );
};

export default Home;
