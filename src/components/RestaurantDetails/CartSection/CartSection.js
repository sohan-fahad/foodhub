import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./CartSection.css";

const CartSection = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   window.addEventListener('scroll', isSticky);
  //   return () => {
  //     window.removeEventListener('scroll', isSticky);
  //   };
  // });

  // /* Method that will fix header after a specific scrollable */
  // const isSticky = (e) => {
  //   const header = document.querySelector('#cart-items');
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  // };
  return (
    <div className="CartSection mt-5">
      <div className="cart_items">
        <p className="text-center fw-bold m-0">Your Cart</p>
        <p className="text-center second_color">
          Start adding items to your cart
        </p>

        <div className="cart_items_wrapper"></div>
        <hr />
        <div className="d-flex justify-content-between mt-2 second_color">
          <label htmlFor="">Subtotal</label>
          <label htmlFor="">100tk</label>
        </div>
        <div className="d-flex justify-content-between mt-2 second_color">
          <label htmlFor="">Delivery Fee</label>
          <label htmlFor="">100tk</label>
        </div>
        <div className="d-flex justify-content-between mt-2 second_color">
          <label htmlFor="">VAT</label>
          <label htmlFor="">100tk</label>
        </div>
        <div className="d-flex justify-content-between mt-2 second_color">
          <label htmlFor="">Discount</label>
          <label htmlFor="">100tk</label>
        </div>
        <div className="d-flex justify-content-between mt-2 second_color">
          <label htmlFor="" className="fw-bold">
            Total
          </label>
          <label htmlFor="" className="fw-bold">
            100tk
          </label>
        </div>
        <button onClick={() => navigate("/user/checkout")}>GO TO CHECK OUT</button>
      </div>
    </div>
  );
};

export default CartSection;
