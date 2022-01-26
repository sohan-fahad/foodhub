import React, { useState } from "react";
import "./PaymentDetails.css";
import creditCard from "../../../images/creditCard.png";
import bkash from "../../../images/bKashIcon.png";

const PaymentDetails = () => {
  const [payment, setPayment] = useState("");
  return (
    <div className="PaymentDetails">
      <div className="PersonalDetails_title">
        <span>2</span>
        <h3 className="ms-3 mb-0">Payment</h3>
      </div>
      <div className="PaymentDetails_credit_card_wrapper">
        <div
          className="PaymentDetails_credit_card"
          onClick={() => setPayment("credit")}
        >
          <div className="d-flex">
            <div className="PaymentDetails_check">
              <div
                className={
                  payment === "credit" && "PaymentDetails_check_active"
                }
              ></div>
            </div>
            <label className="ms-3">Credit/Debit Card</label>
          </div>
          <img src={creditCard} alt="" />
        </div>
        {payment === "credit" && (
          <div className="PaymentDetails_credit_card_form">
            <form>
              <div className="row">
                <div className="col-12">
                  <input type="text" placeholder="Card Number" />
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <input type="text" placeholder="CVC" />
                </div>
                <div className="col-12 mt-3">
                  <input type="text" placeholder="Cardholder Name" />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="PaymentDetails_cash_wrapper">
        <div className="PaymentDetails_cash" onClick={() => setPayment("cash")}>
          <div className="d-flex">
            <div className="PaymentDetails_check">
              <div
                className={payment === "cash" && "PaymentDetails_check_active"}
              ></div>
            </div>
            <label className="ms-3" style={{ cursor: "pointer" }}>
              Cash
            </label>
          </div>
          <i className="fas fa-money-bill-alt" style={{ fontSize: "25px" }}></i>
        </div>
        {payment === "cash" && (
          <div className="PaymentDetails_cash_info">
            <h5>PAY BY CASH</h5>
            <p>
              Consider payment upon ordering for contactless delivery. You can't
              pay by a card to the rider upon delivery
            </p>
          </div>
        )}
      </div>
      <div className="PaymentDetails_bkash_wrapper">
        <div
          className="PaymentDetails_cash"
          onClick={() => setPayment("bkash")}
        >
          <div className="d-flex">
            <div className="PaymentDetails_check">
              <div
                className={payment === "bkash" && "PaymentDetails_check_active"}
              ></div>
            </div>
            <label className="ms-3" style={{ cursor: "pointer" }}>
              Cash
            </label>
          </div>
          <img src={bkash} alt="" />
        </div>

        {payment === "bkash" && (
          <div className="PaymentDetails_bkash_info">
            <h5>PAY BY CASH</h5>
            <p>
              Consider payment upon ordering for contactless delivery. You can't
              pay by a card to the rider upon delivery
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
