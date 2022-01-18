import React from "react";
import OfferCode from "../../RestaurantComponents/OfferCode/OfferCode";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";

const RestaurantDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-9 col-12">
        <RestaurantHeader></RestaurantHeader>
        <RestaurantInfo></RestaurantInfo>
      </div>
      <div className="col-lg-3 col-12"></div>
    </div>
  );
};

export default RestaurantDetails;
