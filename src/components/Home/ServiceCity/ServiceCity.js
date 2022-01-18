import React from "react";
import "./ServiceCity.css";

const ServiceCity = ({ city }) => {
  return (
    <div className="col-lg-3 col-sm-4 col-6">
      <div className="city_card">
        <img src={city?.cityImg} alt="" className="w-100" />
        <h4>{city?.name}</h4>
        <button className="arrow">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ServiceCity;
