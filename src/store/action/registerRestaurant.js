import React from "react";

const registerRestaurant = (info) => {
  return {
    type: "Restaurant_Register",
    payload: info,
  };
};

export default registerRestaurant;
