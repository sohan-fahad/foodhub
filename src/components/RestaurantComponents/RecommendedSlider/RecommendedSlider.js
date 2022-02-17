import React from "react";
import "./RecommendedSlider.css";

const RecommendedSlider = ({ sliderItem }) => {
  return (
    <div className="RecommendedSlider">
      <img src={sliderItem?.slider} className="img-fluid w-100" />
      <div className="title">
        <h5>{sliderItem?.name}</h5>
        <h5>
          <i className="fas fa-star me-2" style={{ color: "#fdc50e" }}></i>
          {sliderItem?.rating}/5 <span className="second_title">(12k)</span>
        </h5>
      </div>
      <div>
        <span className="fw-bold">৳</span>
        <span className="fw-bold">৳</span>
        <span className="fw-bold">৳</span>
      </div>
      <hr />
      <div className="SliderCardFooter">
        <p className="brand_color">
          <i className="far fa-heart me-2"></i> {sliderItem?.reactLove}
        </p>
        <p>
          12<span> tk</span> <span className="second_title">Delivery fee</span>
        </p>
      </div>
      <div className="offer_details">
        <p>15% OFF+BIRYANI150 </p>
      </div>
    </div>
  );
};

export default RecommendedSlider;
