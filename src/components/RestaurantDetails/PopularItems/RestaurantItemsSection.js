import React from "react";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import "./RestaurantItemsSection.css";

const RestaurantItemsSection = ({ title, secondary, products, id }) => {
  return (
    <div className="RestaurantItemsSection" id={id}>
      <h3 className="p-0">{title && title}</h3>
      <p className="p-0">{secondary && secondary}</p>
      <div className="row g-3">
        {products.map((product) => (
          <RestaurantItem key={product.id} product={product}></RestaurantItem>
        ))}
      </div>
    </div>
  );
};

export default RestaurantItemsSection;
