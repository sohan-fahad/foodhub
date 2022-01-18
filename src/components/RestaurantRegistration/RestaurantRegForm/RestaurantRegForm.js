import React from "react";
import "./RestaurantRegForm.css";

const RestaurantRegForm = () => {
  return (
    <div className="RestaurantRegForm">
      <div className="container">
        <h1>Join as a Partner Restaurant</h1>
        <p>
          The info you provide is safe and it’ll help us get you set up faster.
        </p>
        <form>
          <div className="RestaurantRegForm_wrapper">
            <div className="RestaurantRegForm_details">
              <h3>Your Restaurant</h3>
            </div>
            <div className="RestaurantRegForm_details_input">
              <label>
                Restaurant Name <span className="brand_color">*</span>
              </label>
              <input type="text" placeholder="Enter your restaurant name" />
              <label>
                Restaurant Address <span className="brand_color">*</span>
              </label>
              <input type="text" placeholder="Enter your restaurant address" />
              <label>What is the average cost of a meal for one person?</label>
              <select name="" id="">
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
            </div>
          </div>
          <div className="RestaurantRegForm_wrapper mt-5">
            <div className="RestaurantRegForm_details">
              <h3>Your Restaurant</h3>
            </div>
            <div className="RestaurantRegForm_details_input">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <label>
                    Your Role <span className="brand_color">*</span>
                  </label>
                  <select name="" id="">
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                  </select>
                </div>
                <div className="col-lg-6 col-12">
                  <label>
                    Your full name <span className="brand_color">*</span>
                  </label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="col-lg-6 col-12">
                  <label>
                    Mobile Number <span className="brand_color">*</span>
                  </label>
                  <input type="text" placeholder="01XXXXXXXXX" />
                </div>
                <div className="col-lg-6 col-12">
                  <label>
                    Email Address <span className="brand_color">*</span>
                  </label>
                  <input type="text" placeholder="Enter your Email name" />
                </div>
              </div>
              <button type="submit">Register Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegForm;
