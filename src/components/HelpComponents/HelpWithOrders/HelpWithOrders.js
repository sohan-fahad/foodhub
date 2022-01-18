import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import useMethod from "../../../Hooks/useMethod";
import "./HelpWithOrders.css";

const HelpWithOrders = () => {
  const [order, setOrder] = useState("upcoming");
  const [image, setImage] = useState(false);
  const { cancelAlert, handleClose, handleShow, show } = useMethod();

  return (
    <div className="HelpWithOrders">
      <div className="HelpWithOrders_btn">
        <button
          className={order === "upcoming" && "active_help_order_btn"}
          onClick={() => {
            setOrder("upcoming");
          }}
        >
          Upcoming Orders
        </button>
        <button
          className={order === "past" && "active_help_order_btn"}
          onClick={() => {
            setOrder("past");
          }}
        >
          Past Orders
        </button>
      </div>
      <div className="HelpWithOrders_container">
        {order === "upcoming" && (
          <div className="py-5">
            <p className="brand_color fw-bold text-center">All Caught Up</p>
            <p className="second_title text-center">
              You don't have any pending orders.
            </p>
          </div>
        )}
        {order === "past" && (
          <div className="HelpWithOrders_past_order mt-5">
            <div>
              <h4>Cafe Spartan - Banasree</h4>
              <p>
                <span className="second_title">Delivery by</span>{" "}
                <span className="fw-bold"> FoodHub</span>
              </p>
              <p className="second_title">Oct 7, 2021</p>
              <p className="second_title">2x Platter One</p>
            </div>
            <div>
              <p>BDT 1250.00</p>
              <p className="fw-bold brand_color">PENDING</p>
              <button onClick={cancelAlert}>CANCEL</button>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <button className="HelpWithOrders_another_order" onClick={handleShow}>
          Another Orders <i className="fas fa-chevron-right"></i>
        </button>

        <Modal show={show} animation={false} centered>
          <i
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "30px",
              top: "20px",
              fontSize: "25px",
              cursor: "pointer",
            }}
            className="fas fa-times"
          ></i>
          <form>
            <div className="p-5">
              <h3
                className="text-center"
                style={{
                  color: "var(--title)",
                  fontSize: "24px",
                  fontWeight: "700",
                  padding: "0 0 20px",
                }}
              >
                Another Order
              </h3>
              <hr style={{ margin: "0 auto 20px" }} />

              <h3
                style={{
                  fontSize: "24px",
                  color: "#646464",
                  marginTop: "20px",
                }}
              >
                Specify the order with date
              </h3>

              <div>
                <p
                  style={{
                    marginTop: "60px",
                    color: "#646464",
                    fontSize: "24px",
                  }}
                >
                  Date
                </p>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #646464",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                  type="date"
                />
              </div>

              <div>
                <p
                  style={{
                    marginTop: "20px",
                    color: "#646464",
                    fontSize: "24px",
                  }}
                >
                  Order Details
                </p>
                <textarea
                  style={{
                    width: "100%",
                    border: "1px solid #646464",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div className="my-3">
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div>
                <label>
                  Make sure no personal information like ID's, phone numbers,
                  emails - or other sensitive information is in this photo
                  before sending.
                </label>
              </div>
              <div className="mt-5">
                <input
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    fontWeight: "700",
                    padding: "15px",
                  }}
                  className="form-control"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default HelpWithOrders;
