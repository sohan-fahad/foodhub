import React from "react";
import "./FoodHubBusiness.css";
import FoodHubBusinessImg from "../../../images/Corporate_Info.jpg";

const FoodHubBusiness = () => {
  return (
    <div className="FoodHubBusiness_Info">
      <div className="container">
        <div className="FoodHubBusiness_Info_container">
          <div className="FoodHubBusiness_Info_Img">
            <img src={FoodHubBusinessImg} alt="" />
          </div>
          <div className="FoodHubBusiness_Info_Details">
            <h3>List your Food Hub Business or shop on FoodHub</h3>
            <p>
              Would you like millions of new customers to enjoy your amazing
              food and groceries? So would we! It's simple: we list your menu
              and product lists online, help you process orders, pick them up,
              and deliver them to hungry pandas in a heartbeat! Interested?
              Let's start our partnership today!
            </p>
            <button className="FoodHubBusiness_Info_btn">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodHubBusiness;
