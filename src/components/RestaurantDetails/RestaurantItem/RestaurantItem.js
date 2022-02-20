import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./RestaurantItem.css";
import mealImg from "../../../images/mealImg.jpg";
import itemImg from "../../../images/item.jpg"
import useApi from "../../../Hooks/useApi"
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import RestaurantItemVariant from "../RestaurantItemVariant/RestaurantItemVariant";
import useAuthentication from "../../../Hooks/useAuthentication";
import useCartCalculation from "../../../Hooks/useCartCalculation";
import { useDispatch } from "react-redux";
import totalPrice from "../../../store/action/totalPrice";
import useItemMapping from "../../../Hooks/useItemMapping";


const RestaurantItem = ({ product }) => {


  const { handleShow, show, handleClose, handleMultiIngredient, handleQuantity, handleAddCart, allIngredients, handleVariantInput } = useItemMapping()
  // console.log(allIngredients);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams()




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
          <i className="fas fa-plus" onClick={() => handleShow(product?.id, id)}></i>
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        centered
      >
        <form onSubmit={handleSubmit(handleAddCart)}>
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

              {
                allIngredients.map(ingredients =>
                  ingredients?.item_group.map(ingredientGroup =>
                    <RestaurantItemVariant
                      key={ingredientGroup?.id}
                      title={ingredientGroup?.name}
                      ingredientGroup={ingredientGroup}
                      handleVariantInput={handleVariantInput}
                      handleMultiIngredient={handleMultiIngredient}
                      register={register}
                    />
                  ))
              }


              <div>
                <p className="second_color m-0">Special instructions</p>
                <p className="second_color mb-3">
                  Any specific preferences? Let the restaurant know.
                </p>
                <textarea {...register("preferences")}
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
                <select name="" id="" {...register("history")}>
                  <option value="1">Remove it from my order</option>
                  <option value="2">Remove it from my order</option>
                  <option value="3">Remove it from my order</option>
                </select>

                <div className="meal_add_cart">
                  <div className="meal_add_wrapper">
                    <p className="disable-select" onClick={() => handleQuantity("decrement")}>-</p>

                    <input id="quantityInput" value="1" type="number" />

                    <p className="disable-select" onClick={() => handleQuantity("increment")}>+</p>
                  </div>
                  <button className="add_cart_btn" type="submit">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default RestaurantItem;
