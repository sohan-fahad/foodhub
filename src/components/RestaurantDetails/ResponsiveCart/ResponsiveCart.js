import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useLocation } from "react-router";
import "./ResponsiveCart.css";

const ResponsiveCart = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const [checkout, setCheckout] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/checkout") {
      setCheckout(false);
    } else {
      setCheckout(true);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      setShow(false);
    }
  });

  return (
    <div className="ResponsiveCart">
      <div className="container">
        <div className="d-flex justify-content-between">
          <i class="fas fa-shopping-bag">
            <span className="ms-1">0</span>
          </i>
          <button onClick={handleShow}>VIEW CART</button>
          <p className="text-light m-0">Total: 300tk</p>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={fullscreen}
      >
        <div className="responsive_cart_modal p-4">
          <i class="fas fa-times" onClick={handleClose}></i>

          <div className="responsive_cart_item_wrapper mb-4">
            <div>
              <p className="brand_color m-0 fw-bold brand_color">Burger</p>
              <p className="second_title">Regular</p>
            </div>
            <div className="responsive_cart_item_price">
              <p className="m-0 second_title">120tk</p>
              <div>
                <button>-</button>
                <input defaultValue={1} type="number" /> <button>+</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between mt-5">
            <p className="second_title">Subtotal</p>
            <p className="second_title">360tk</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="second_title">Delivery Fee</p>
            <p className="second_title">30tk</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="second_title">VAT</p>
            <p className="second_title">160tk</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="second_title">Discount</p>
            <p className="second_title">320tk</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold first_title">Total(Inc. VAT)</p>
            <p className="fw-bold first_title">460tk</p>
          </div>
          {checkout && (
            <button className="responsive_check_out_btn">
              GO TO CHECK OUT
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ResponsiveCart;
