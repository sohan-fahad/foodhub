import React, { useEffect, useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import "./CheckOut.css";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import ResponsiveCart from "../../RestaurantDetails/ResponsiveCart/ResponsiveCart";
import CartSection from "../../RestaurantDetails/CartSection/CartSection";

const CheckOut = () => {

  const restaurantName = localStorage.getItem("restaurantName")
  console.log(restaurantName);

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
            <CartSection title={`Your order from ${restaurantName}`} />
            <ResponsiveCart></ResponsiveCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
