import React from "react";
import "./RestaurantRegistration.css";
import RestaurantRegForm from "../RestaurantRegForm/RestaurantRegForm";
import RestaurantRegStep from "../RestaurantRegStep/RestaurantRegStep";
import RestaurantRegAdvantage from "../RestaurantRegAdvantage/RestaurantRegAdvantage";
import WorkProcess from "../../Home/WorkProcess/WorkProcess";

const RestaurantRegistration = () => {
  return (
    <div className="RestaurantRegistration">
      <RestaurantRegForm></RestaurantRegForm>
      <RestaurantRegStep></RestaurantRegStep>
      <RestaurantRegAdvantage></RestaurantRegAdvantage>
      <WorkProcess></WorkProcess>
    </div>
  );
};

export default RestaurantRegistration;
