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

  return (
    <div>
      <HeroBox></HeroBox>
      {/* <WorkProcess></WorkProcess> */}
      <Vendor />
      {/* <ServiceCities></ServiceCities> */}
      <FoodHubBusiness></FoodHubBusiness>
      <DownloadApp></DownloadApp>
      <RestaurantInfo></RestaurantInfo>
      {/* <Blogs></Blogs> */}
    </div>
  );
};

export default Home;
