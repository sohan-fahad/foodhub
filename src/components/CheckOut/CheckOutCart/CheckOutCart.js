import React from "react";
import "./CheckOutCart.css";

const CheckOutCart = () => {
  return (
    <div className="CheckOutCart">
      <div className="container">
        <h5>Your order from Cafe New Star</h5>
        <div className="CheckOutCart_wrapper">
          <div className="d-flex justify-content-between align-items-center second_color">
            <div>
              <p>Items</p>
              <p>* Half</p>
            </div>
            <p>100tk</p>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center second_color">
          <p>Sub-Total</p>
          <p>100tk</p>
        </div>
        <div className="d-flex justify-content-between align-items-center second_color">
          <p>Discount</p>
          <p>100tk</p>
        </div>
        <div className="d-flex justify-content-between align-items-center second_color">
          <p className="fw-bold">Total(inc.VAT)</p>
          <p className="fw-bold">100tk</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCart;
