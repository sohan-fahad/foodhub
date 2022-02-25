import React from "react";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import CuisinesSlider from "../CuisinesSlider/CuisinesSlider";
import DeliveryPickUp from "../DeliveryPickUp/DeliveryPickUp";
import OfferCode from "../OfferCode/OfferCode";
import RecommendedSliders from "../RecommendedSliders/RecommendedSliders";
import RestaurantOfferSlider from "../RestaurantOfferSlider/RestaurantOfferSlider";
import SearchFilter from "../SearchFilter/SearchFilter";
import "./FindeRestaurant.css";

const FindeRestaurant = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="FindeRestaurant">
      <OfferCode></OfferCode>
      <DeliveryPickUp></DeliveryPickUp>
      <SearchFilter></SearchFilter>
      <RestaurantOfferSlider></RestaurantOfferSlider>
      <CuisinesSlider></CuisinesSlider>
      {
        user &&
        <RecommendedSliders title={"Your Restaurant"}></RecommendedSliders>
      }
      {
        user &&
        <RecommendedSliders title={"Your Favorite Restaurant"}></RecommendedSliders>
      }


      <RecommendedSliders title={"Recommended Restaurant"}></RecommendedSliders>
      <AllRestaurants></AllRestaurants>
    </div>
  );
};

export default FindeRestaurant;
