import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./RestaurantInfo.css";
import fizza from "../../../images/fizza.jpg";
import AboutRestaurant from "../AboutRestaurant/AboutRestaurant";
import RestaurantReviews from "../RestaurantReviews/RestaurantReviews";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const activeStyle = { borderBottom: "3px solid ##4cb32b" };
  return (
    <div className="RestaurantInfo">
      <div className="container">
        <div className="restaurant_wrapper">
          <div className="RestaurantInfo_name">
            <h3>Delicious Pizza House</h3>
            <div className="RestaurantInfo_review">
              <p>25% OFF+BUY 1 GET 1</p>
              <p>
                <i className="fas fa-star"></i> <span>4.1/5 (4k+)</span>
              </p>
            </div>
            <p className="mt-3" style={{ fontSize: "16px" }}>
              <span className="brand_color fw-bold">৳৳৳</span> . Fast Food
            </p>
          </div>
          <div>
            <i
              className="fas fa-info-circle"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
        <div style={{ position: "relative" }}>
          <i
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor: "pointer",
              color: "#4cb32b",
              fontSize: "25px",
            }}
            className="fas fa-times"
          ></i>
          <img
            src={fizza}
            alt=""
            className="w-100"
            style={{ height: "150px" }}
          />
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              boxShadow: "2px 2px 10px rgba(233, 233, 233, 0.8)",
              borderRadius: "0 5px 5px 0",
              marginBottom: "30px",
            }}
          >
            <div className="pt-3 px-4">
              <h3
                className="text-center "
                style={{ fontSize: "24px", fontWeight: 700, color: "#444444" }}
              >
                Al Kaderia Restaurant - Rampura Bazar
                <span style={{ fontSize: "16px" }}>
                  <i className="fas fa-star" style={{ color: "yellow" }}></i>
                  <span>4.1/5 </span>
                  <span style={{ fontSize: "16px" }}>(7113)</span>
                </span>
              </h3>
              <p className="text-center" style={{ fontSize: "16px" }}>
                <span className="fw-bold brand_color">৳৳৳</span>
                <span className="second_color">Asian - </span>
                <span className="second_color">Chicken</span>
              </p>
              <p className="text-center" style={{ fontSize: "16px" }}>
                Open 8:00 AM - 11:00 PM
              </p>
            </div>
            <hr />
            <div className="restaurantInfo_button">
              <button onClick={() => setResInfo(false)}>About</button>
              <button className="ms-2" onClick={() => setResInfo(true)}>
                Reviews
              </button>
            </div>
          </div>
          <div
            style={{ width: "90%", margin: "0 auto", paddingBottom: "10px" }}
          >
            {resInfo ? (
              <RestaurantReviews></RestaurantReviews>
            ) : (
              <AboutRestaurant></AboutRestaurant>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RestaurantInfo;
