import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import useCartCalculation from "../../../Hooks/useCartCalculation"
import "./ResponsiveCart.css";

const ResponsiveCart = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [checkout, setCheckout] = useState(true);

  const location = useLocation();
  const navigate = useNavigate()

  const { cartList, deliveryFee, handleQuantity, quantity } = useCartCalculation()
  const { total, subtotal } = useSelector((state) => state.totalPriceReducer)

  useEffect(() => {
    if (location.pathname === "/user/checkout") {
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

  const handleNavigate = () => {
    navigate("/user/checkout")
    setShow(false)
  }

  return (
    <div className="ResponsiveCart">
      <div className="container">
        <div className="d-flex justify-content-between">
          <i className="fas fa-shopping-bag">
            <span className="ms-1">0</span>
          </i>
          <button onClick={handleShow}>VIEW CART</button>
          <p className="text-light m-0">Total: {cartList ? total : 0}tk</p>
        </div>
      </div>
      {
        cartList &&
        <Modal
          show={show}
          onHide={handleClose}
          animation={true}
          fullscreen={fullscreen}
          scrollable
        >
          <Modal.Body>
            <div className="responsive_cart_modal p-4">
              <i className="fas fa-times" onClick={handleClose}></i>

              {
                cartList && cartList.map(pd =>
                  <div className="responsive_cart_item_wrapper w-100 mb-3">
                    <div className="w-50">
                      <p className="brand_color m-0 fw-bold brand_color">{pd?.name}</p>
                      <div className="second_title">{pd?.selectVariant?.ingredient && `+${pd?.selectVariant?.ingredient}`}</div>
                      {
                        pd?.ingredients?.map(item => <div key={item?.id}>{item?.ingredient && `+${item?.ingredient}`}</div>)
                      }
                    </div>
                    <div className="responsive_cart_item_price w-50">
                      <p className="m-0 second_title">{pd?.subTotal}tk</p>
                      <div className="d-flex justify-content-between align-items-center" style={{ width: "80px" }}>
                        {
                          quantity === 1 ?
                            <i className="fas fa-trash-alt brand_color"
                              onClick={() => handleQuantity(pd?.id, "decrement")}
                              style={{ cursor: "pointer", fontSize: "12px" }}
                            >
                            </i>
                            :
                            <i className="fas fa-minus disable-select brand_color" style={{ cursor: "pointer", fontSize: "12px" }} onClick={() => handleQuantity(pd?.id, "decrement")}></i>
                        }

                        <input className="w-75 border-0 text-center" id={`item${pd?.id}`} value={pd?.itemQuantity} />

                        <i className="fas fa-plus disable-select brand_color"
                          style={{ cursor: "pointer", fontSize: "12px" }}
                          onClick={() => handleQuantity(pd?.id, "increment")}>
                        </i>

                      </div>
                    </div>
                  </div>
                )
              }
              <hr />
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <p className="second_title mb-1">Subtotal</p>
                  <p className="second_title mb-1">{subtotal}tk</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="second_title mb-1">Delivery Fee</p>
                  <p className="second_title mb-1">{deliveryFee}tk</p>
                </div>
                {/* <div className="d-flex justify-content-between">
                <p className="second_title mb-1">Discount</p>
                <p className="second_title mb-1">320tk</p>
              </div> */}
                <div className="d-flex justify-content-between">
                  <p className="fw-bold first_title mb-1">Total(Inc. VAT)</p>
                  <p className="fw-bold first_title mb-1">{total}tk</p>
                </div>
              </div>
            </div>
            {checkout && (
              <button className="responsive_check_out_btn" onClick={handleNavigate}>
                GO TO CHECK OUT
              </button>
            )}
          </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default ResponsiveCart;
