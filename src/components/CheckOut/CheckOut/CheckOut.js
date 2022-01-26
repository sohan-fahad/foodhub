import React from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import "./CheckOut.css";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import CheckOutCart from "../CheckOutCart/CheckOutCart";
import ResponsiveCart from "../../RestaurantDetails/ResponsiveCart/ResponsiveCart";

const CheckOut = () => {
  return (
    <div className="CheckOut">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <DeliveryDetails></DeliveryDetails>
            <PersonalDetails></PersonalDetails>
            <PaymentDetails></PaymentDetails>
          </div>
          <div className="col-lg-4 col-12">
            <CheckOutCart></CheckOutCart>
            <ResponsiveCart></ResponsiveCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
