import React, { useState } from "react";
import "./PaymentDetails.css";
import creditCard from "../../../images/creditCard.png";
import bkash from "../../../images/bKashIcon.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useApi from "../../../Hooks/useApi"
import { useDispatch } from "react-redux";
import cartObject from "../../../store/action/cartObject";
import { useNavigate } from "react-router";
import { headerCartQuantity, totalQuantity } from "../../../store/action/totalQuantity";

const PaymentDetails = () => {
  const [payment, setPayment] = useState("");

  const cartItems = JSON.parse(localStorage.getItem("cartItems"))
  const user = JSON.parse(localStorage.getItem("user"))
  const restaurant_id = JSON.parse(localStorage.getItem("rstid"))

  const { total } = useSelector((state) => state.totalPriceReducer)

  const { foodHubAPI } = useApi()

  const { cartObjectItem } = useSelector((state) => state.cartObjectReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const items = []

  useEffect(() => {
    console.log(cartItems);
    if (cartItems) {
      cartItems.forEach(element => {
        let item = {
          id: element?.id,
          quantity: element?.itemQuantity,
          price: element?.itemPrice,
          items_extra: [

          ]
        }

        element?.ingredients?.forEach(pd => {
          let ingredient = {
            ingredient_id: pd?.id,
            quantity: element?.itemQuantity,
            price: pd?.price
          }
          item?.items_extra.push(ingredient)
        })

        items.push(item)

      });
      dispatch(cartObject(items))
    }

  }, [!cartItems])



  const handlePlaceOrder = () => {
    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"))

    const orderItem = {
      customer_id: user?.id,
      note: deliveryAddress?.note,
      item_count: cartItems.length,
      grand_total: total,
      restaurent_id: restaurant_id,
      branch_id: 1,
      is_paid: 0,
      order_status: "pending",
      payment_status: "pending",
      status: 1,
      items: cartObjectItem

    }


    fetch(`${foodHubAPI}/user/orders`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        "x-access-token": `${user?.accessToken}`
      },
      body: JSON.stringify(orderItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.statusCode === 200) {
          console.log(data);
          localStorage.setItem("order_id", data?.payload?.id)
          localStorage.removeItem("cartItems")
          localStorage.removeItem("rstid")
          localStorage.removeItem("qtnty")
          localStorage.removeItem("exptPth")
          dispatch(headerCartQuantity(0, ""))
          navigate("/orderdetails")
        }
      })
  }

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
      {
        payment &&
        <button onClick={handlePlaceOrder}>PLACE ORDER</button>
      }

    </div>
  );
};

export default PaymentDetails;
