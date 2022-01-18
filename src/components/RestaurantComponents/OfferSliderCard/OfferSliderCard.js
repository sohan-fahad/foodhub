import React from "react";
import "./OfferSliderCard.css";
const OfferSliderCard = ({ sliderImg }) => {
  return (
    <div className="OfferSliderCard">
      <img src={sliderImg} alt="" className="img-fluid w-100" />
    </div>
  );
};

export default OfferSliderCard;
