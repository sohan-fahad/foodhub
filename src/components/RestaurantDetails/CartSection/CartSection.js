import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import useCartCalculation from "../../../Hooks/useCartCalculation";
import "./CartSection.css";

const CartSection = ({ title }) => {

  const { cartList, deliveryFee, handleQuantity, handleCheckoutPath, quantity } = useCartCalculation()

  const location = useLocation()


  const { total, subtotal } = useSelector((state) => state.totalPriceReducer)


  return (
    <div className="CartSection mt-5 px-3">
      <div className="cart_items">
        <p className="text-center fw-bold m-0">Your Cart</p>
        <p className="text-center second_color">
          {title}
        </p>

        <div className="cart_items_wrapper">
          {
            cartList && cartList.map(pd =>
              <div className="row mb-3 justify-content-between pe-2" key={pd?.itemId}>
                <div className="col-6">
                  <label className="brand_color fw-bold">{pd?.name}</label>
                  <div className="second_title">{pd?.SelectVarient}</div>
                  {
                    pd?.ingredients?.map(item => <div key={item?.id}>{item?.ingredient && `+${item?.ingredient}`}</div>)
                  }
                </div>

                <div className="col-4 text-end">
                  <label className="second_color">{pd?.subTotal}tk</label>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    {
                      quantity === 1 ?
                        <i className="fas fa-trash-alt"
                          onClick={() => handleQuantity("decrement", pd?.itemId)}
                          style={{ cursor: "pointer", fontSize: "12px" }}
                        >
                        </i>
                        :
                        <i className="fas fa-minus disable-select" style={{ cursor: "pointer", fontSize: "12px" }} onClick={() => handleQuantity("decrement", pd?.itemId)}></i>
                    }

                    <input className="w-75 border-0 text-center" id={`item${pd?.itemId}`} value={pd?.itemQuantity} />

                    <i className="fas fa-plus disable-select"
                      style={{ cursor: "pointer", fontSize: "12px" }}
                      onClick={() => handleQuantity("increment", pd?.itemId)}>
                    </i>

                  </div>
                </div>
              </div>
            )
          }
        </div>
        <hr />
        {
          cartList &&
          <div>
            <div className="d-flex justify-content-between mt-2 second_color">
              <label htmlFor="">Subtotal</label>
              <label htmlFor="">{subtotal}tk</label>
            </div>
            <div className="d-flex justify-content-between mt-2 second_color">
              <label htmlFor="">Delivery Fee</label>
              <label htmlFor="">{deliveryFee}tk</label>
            </div>
            {/* <div className="d-flex justify-content-between mt-2 second_color">
              <label htmlFor="">Discount</label>
              <label htmlFor="">100tk</label>
              </div> */}
            <div className="d-flex justify-content-between mt-2 second_color">
              <label htmlFor="" className="fw-bold">
                Total(inc.VAT)
              </label>
              <label htmlFor="" className="fw-bold">
                {total ? total : 0}tk
              </label>
            </div>
          </div>
        }
        {
          location.pathname === "/user/checkout" ? "" : <button onClick={handleCheckoutPath} disabled={cartList ? false : true} >GO TO CHECK OUT</button>
        }

      </div>
    </div >
  );
};

export default CartSection;
