import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./RestaurantItem.css";
import mealImg from "../../../images/mealImg.jpg";
import itemImg from "../../../images/item.jpg"
import useApi from "../../../Hooks/useApi"
import { useParams } from "react-router";
import restaurantDetails from "../../../store/action/restaurantInfo";

const RestaurantItem = ({ product }) => {
  const [show, setShow] = useState(false);
  const [itemDetails, setItemDetails] = useState({})
  const [itemGroup, setItemGroup] = useState([])

  const { id } = useParams()

  const { foodHubAPI } = useApi()


  const handleClose = () => setShow(false);

  const handleShow = async () => {
    await fetch(`${foodHubAPI}/user/items/${product.id}/${id}`)
      .then(async (res) => await res.json())
      .then(async (data) => {
        await setItemGroup(data?.payload?.item_mapping?.item_group_mapping?.item_group)
        await setItemDetails(data.payload)
        setShow(true)
      })

  };
  return (
    <div className="col-lg-6 col-12">
      <div className="RestaurantItem">
        <div>
          <h3>{product?.name}</h3>
          <p>{product?.description}</p>
          <p>{product?.price}৳</p>
        </div>
        <div className="item_img">
          <img src={product?.itemImg || itemImg} alt="" />
          <i className="fas fa-plus" onClick={handleShow}></i>
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <div className="meal_details">
          <i
            className="fas fa-times"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              fontSize: "25px",
              color: "var(--primary)",
              cursor: "pointer",
            }}
          ></i>
          <img src={mealImg} alt="" className="img-fluid w-100" />
          <div className="p-3">
            <h3
              style={{
                fontSize: "36px",
                fontWeight: "700",
                marginTop: "15px",
                color: "var(--title)",
              }}
            >
              {product?.name}
            </h3>
            <p className="second_color m-0">Get another one free</p>
            <hr />
            <div className="meals-title">
              {
                // itemGroup.map(pd => <div>
                //   <h3>{pd?.name}</h3>
                // </div>)
              }
              <h3>{itemGroup?.name}</h3>
              <p>1 Required</p>
            </div>
            <div className="meal_size">
              <div>
                <input type="radio" id="6pc" />
                <label htmlFor="6pc" className="ms-3">
                  6 Pcs
                </label>
              </div>
              <div>
                <label htmlFor="">1205tk</label>
              </div>
            </div>
            <hr />
            <div>
              <p className="second_color m-0">Special instructions</p>
              <p className="second_color mb-3">
                Any specific preferences? Let the restaurant know.
              </p>
              <textarea
                placeholder="e.g. No mayo"
                type="text"
                style={{
                  width: "100%",
                  height: "150px",
                  border: "0.5px solid var(--secondary)",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <p className="my-5">If this product is not available</p>
              <select name="" id="">
                <option value="">Remove it from my order</option>
                <option value="">Remove it from my order</option>
                <option value="">Remove it from my order</option>
              </select>

              <div className="meal_add_cart">
                <div className="meal_add_wrapper">
                  <button>-</button>
                  <input defaultValue={1} type="number" /> <button>+</button>
                </div>
                <button className="add_cart_btn">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RestaurantItem;
