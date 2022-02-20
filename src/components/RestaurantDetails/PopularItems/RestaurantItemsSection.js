import React from "react";
import { useSelector } from "react-redux";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./RestaurantItemsSection.css";

const RestaurantItemsSection = ({ title, secondary, products, id }) => {

  const options = {
    timeout: 2000,
    position: positions.MIDDLE_RIGHT
  };


  return (
    <div className="RestaurantItemsSection" id={id}>
      <h3 className="p-0">{title && title}</h3>
      <p className="p-0">{secondary && secondary}</p>
      <div className="row g-3">
        {products.map((product) => (
          <Provider key={product.id} template={AlertTemplate} {...options}>
            <RestaurantItem key={product.id} product={product}></RestaurantItem>
          </Provider>
        ))}
      </div>
    </div>
  );
};

export default RestaurantItemsSection;
