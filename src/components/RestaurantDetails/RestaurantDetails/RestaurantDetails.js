import React, { useState } from "react";
import "./RestaurantDetails.css";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import RestaurantItems from "../RestaurantItems/RestaurantItems";
import RestaurantOffer from "../RestaurantOffer/RestaurantOffer";
import CartSection from "../CartSection/CartSection";
import ResponsiveCart from "../ResponsiveCart/ResponsiveCart";
import { useParams } from "react-router";
import { useEffect } from "react";
import useApi from "../../../Hooks/useApi";
import { useDispatch } from "react-redux";
import restaurantInfo from "../../../store/action/restaurantInfo";

const RestaurantDetails = () => {

  const { foodHubAPI } = useApi()
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState([])
  const [items, setItems] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${foodHubAPI}/user/items/restaurants?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setRestaurant(data.payload[0])
        setItems(data.payload[0].item)
      })
  }, [])


  return (
    <div className="RestaurantDetails">
      <div className="row">
        <div className="col-lg-9 col-12 p-0">
          <RestaurantHeader></RestaurantHeader>
          <RestaurantInfo restaurant={restaurant} />
          <RestaurantOffer></RestaurantOffer>
          <RestaurantItems items={items} />
        </div>
        <div className="col-lg-3 col-12  p-0">
          <CartSection></CartSection>
        </div>
        <ResponsiveCart></ResponsiveCart>
      </div>
    </div>
  );
};

export default RestaurantDetails;
