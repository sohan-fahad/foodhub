import React, { useState } from "react";
import "./RefundBalance.css";
import RefundBalanceIcon from "../../images/refundIcon.png";
import creditCard from "../../images/credit-cards.png";
import refunProcessIcon from "../../images/refunProcessIcon.png";
import acceptIm from "../../images/accepted.png";
import { Link } from "react-router-dom";
import RefundTermsModal from "../RefundTermsModal/RefundTermsModal";
import useMethod from "../../Hooks/useMethod";

const RefundBalance = () => {
  const { show, setShow, handleClose, handleShow } = useMethod();
  const [terms, setTerms] = useState(false);

  return (
    <div className="RefundBalance" id="refund">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 col-12">
            <div className="refund_balance_payment_method">
              <div className="refund_balance_payment_title">
                <img src={RefundBalanceIcon} alt="" />
                <h3 className="text-start">Payment methods</h3>
              </div>
              <div className="refund_balance_check_out">
                <div className="refund_balance_check_out_info">
                  <p>
                    Save a payment method at checkout and it'll show up here
                  </p>
                  <Link to="/">Back to home</Link>
                </div>
                <img src={creditCard} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="refund_balance_amount_wrapper">
              <div className="refund_balance_amount_info">
                <h3>Refund Account</h3>
                <p>Balance</p>
                <h1>TK 0</h1>
              </div>
              <img src={refunProcessIcon} alt="" />
            </div>
          </div>
          {terms === false && (
            <div className="col-lg-6 col-12">
              <div className="refund_balance_terms">
                <div className="refund_balance_terms_wrapper">
                  <div className="refund_balance_terms_img">
                    <img src={acceptIm} alt="" />
                  </div>
                  <div className="refund_balance_terms_info">
                    <p className="text-start">Step 1 of 1</p>
                    <h3 className="text-start">Terms & conditions</h3>
                    <p className="text-start">
                      Complete your refund account setup
                    </p>
                  </div>
                </div>
                <i className="fas fa-chevron-right" onClick={handleShow}></i>
              </div>
            </div>
          )}
        </div>
        <RefundTermsModal
          show={show}
          handleClose={handleClose}
          setTerms={setTerms}
        ></RefundTermsModal>
      </div>
    </div>
  );
};

export default RefundBalance;
