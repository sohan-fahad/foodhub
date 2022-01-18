import React from "react";
import CuisinesSlider from "../CuisinesSlider/CuisinesSlider";
import OfferCode from "../OfferCode/OfferCode";
import RecommendedSliders from "../RecommendedSliders/RecommendedSliders";
import RestaurantOfferSlider from "../RestaurantOfferSlider/RestaurantOfferSlider";
import SearchFilter from "../SearchFilter/SearchFilter";
import "./FindeRestaurant.css";

const FindeRestaurant = () => {
  return (
    <div className="FindeRestaurant">
      <OfferCode></OfferCode>
      <SearchFilter></SearchFilter>
      <RestaurantOfferSlider></RestaurantOfferSlider>
      <CuisinesSlider></CuisinesSlider>
      <RecommendedSliders></RecommendedSliders>
    </div>
  );
};

export default FindeRestaurant;
