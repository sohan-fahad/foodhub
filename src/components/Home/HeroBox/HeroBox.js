import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { delivery, pickUp } from "../../../store/action/deliverState";
import "./HeroBox.css";

const HeroBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { getUserLocation } = useAuth()

  const handlePickup = () => {
    dispatch(pickUp())
    navigate("/restaurant/new")
  }

  const handleDelivery = () => {
    dispatch(delivery())
    navigate("/restaurant/new")
  }

  return (
    <div className="hero_box">
      <div className="container">
        <div className="hero_container">
          {/* <h1>FOOD DELIVERY SERVICE</h1> */}
          <h1>It's the food and groceries you love, delivered</h1>
          <div className="location_container">
            <div className="get_location">
              <input
                type="text"
                id="searchTextField"
                placeholder="Enter your full address"
              />
              <div className="location_gps">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="var(--primary)"
                  onClick={getUserLocation}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                </svg>
              </div>
            </div>
            <div className="get_restaurant">
              <button
                className="get_restaurant_btn me-3"
                onClick={handleDelivery}
              >
                DELIVERY
              </button>
              <button
                className="get_restaurant_btn"
                onClick={handlePickup}
              >
                PICK-UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
