import React, { useState } from "react";
import "./RestaurantDetails.css";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import RestaurantItems from "../RestaurantItems/RestaurantItems";
import RestaurantOffer from "../RestaurantOffer/RestaurantOffer";
import CartSection from "../CartSection/CartSection";
import ResponsiveCart from "../ResponsiveCart/ResponsiveCart";

const RestaurantDetails = () => {
  return (
    <div className="RestaurantDetails">
      <div className="row">
        <div className="col-lg-9 col-12 p-0">
          <RestaurantHeader></RestaurantHeader>
          <RestaurantInfo></RestaurantInfo>
          <RestaurantOffer></RestaurantOffer>
          <RestaurantItems></RestaurantItems>
        </div>
        <div className="col-lg-3 col-12  p-0">
          <CartSection></CartSection>
        </div>
        <ResponsiveCart></ResponsiveCart>
      </div>
    </div>
  );
};

export default RestaurantDetails;
