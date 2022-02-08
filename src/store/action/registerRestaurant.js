import React from "react";

const registerRestaurant = (info) => {
  return {
    type: "REGISTER_RESTAURANT",
    payload: info,
  };
};

export default registerRestaurant;
