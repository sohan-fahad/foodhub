import React from "react";
import "./RestaurantRegStep.css";
import step1 from "../../../images/step1.png";
import step2 from "../../../images/step2.png";
import step3 from "../../../images/step3.png";
import step4 from "../../../images/step4.png";

const RestaurantRegStep = () => {
  return (
    <div className="RestaurantRegStep">
      <div className="container">
        <h1>Steps to Activation</h1>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="RestaurantRegStep_card">
              <img src={step1} alt="" className="img-fluid" />
              <p className="mt-4">Step 1:</p>
              <p>Sign up online</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="RestaurantRegStep_card">
              <img src={step2} alt="" className="img-fluid" />
              <p className="mt-4">Step 1:</p>
              <p>Sign up online</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="RestaurantRegStep_card">
              <img src={step3} alt="" className="img-fluid" />
              <p className="mt-4">Step 1:</p>
              <p>Sign up online</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="RestaurantRegStep_card">
              <img src={step4} alt="" className="img-fluid" />
              <p className="mt-4">Step 1:</p>
              <p>Sign up online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegStep;
