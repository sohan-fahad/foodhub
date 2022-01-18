import React from "react";
import "./RestaurantInfo.css";
import restaurant from "../../../images/Restaurant_info_img.jpg";
import { useNavigate } from "react-router";

const RestaurantInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="Restaurant_Info">
      <div className="container">
        <h1>Restaurants Information</h1>
        <p>You prepare the food, we handle the rest</p>
        <div className="Restaurant_Info_container">
          <div className="Restaurant_Info_Img">
            <img src={restaurant} alt="" />
          </div>
          <div className="Restaurant_Info_Details">
            <h3>List your restaurant or shop on FoodHub</h3>
            <p>
              Would you like millions of new customers to enjoy your amazing
              food and groceries? So would we! It's simple: we list your menu
              and product lists online, help you process orders, pick them up,
              and deliver them to hungry pandas – in a heartbeat! Interested?
              Let's start our partnership today!
            </p>
            <button
              className="Restaurant_Info_btn"
              onClick={() => navigate("/restaurant/registration")}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
