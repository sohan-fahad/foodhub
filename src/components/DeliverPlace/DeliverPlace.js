import React, { useState } from "react";
import UpdateLocation from "../UpdateLocation/UpdateLocation";
import "./DeliverPlace.css";

const DeliverPlace = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="DeliverPlace">
      <button className="user_location1 second_title" onClick={handleShow}>
        Delivery Location:
        <span className="fw-bold ms-2">Banaree, Rampura, Dhaka</span>
        <i className="fas fa-sort-down ms-2"></i>
      </button>
      <UpdateLocation show={show} handleClose={handleClose}></UpdateLocation>
    </div>
  );
};

export default DeliverPlace;
