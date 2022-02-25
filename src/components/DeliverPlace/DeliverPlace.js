import React, { useState } from "react";
import WhenAsap from "../RestaurantComponents/WhenAsap/WhenAsap";
import UpdateLocation from "../UpdateLocation/UpdateLocation";
import "./DeliverPlace.css";

const DeliverPlace = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="DeliverPlace">
      <div className="row w-100">
        <div className="col-6 border-start border-end d-flex justify-content-center">
          <button className="user_location1 second_title" onClick={handleShow}>
            Delivery Location:
            <span className="fw-bold ms-2">Banaree, Rampura, Dhaka</span>
            <i className="fas fa-sort-down ms-2"></i>
          </button>

        </div>
        <div className="col-6 border-end d-flex justify-content-center">
          <button className="user_location1 second_title" onClick={handleShow}>
            When
            <span className="fw-bold ms-2">ASAP</span>
            <i className="fas fa-sort-down ms-2"></i>
          </button>
        </div>
      </div>

      {/* <WhenAsap /> */}
      <UpdateLocation show={show} handleClose={handleClose}></UpdateLocation>
    </div>
  );
};

export default DeliverPlace;
