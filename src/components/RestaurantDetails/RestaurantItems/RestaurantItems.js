import React, { useEffect, useState } from "react";
import RestaurantItemsSection from "../PopularItems/RestaurantItemsSection";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import itemImg from "../../../images/item.jpg";
import "./RestaurantItems.css";
import { useDispatch } from "react-redux";
import useApi from "../../../Hooks/useApi";
import { useParams } from "react-router";
import restaurantDetails from "../../../store/action/restaurantInfo";

const RestaurantItems = () => {
  const products = [
    {
      id: 1,
      name: "Title Name",
      description: "loream dfjisfjoisafdjio dsfhkashshjkjks hjsd",
      price: 125,
      itemImg: itemImg,
    },
    {
      id: 2,
      name: "Title Name",
      description: "loream dfjisfjoisafdjio dsfhkashshjkjks hjsd",
      price: 125,
      itemImg: itemImg,
    },
  ];

  const dispatch = useDispatch()

  const [restaurant, setRestaurant] = useState([])


  const { id } = useParams()
  const { foodHubAPI } = useApi()
  useEffect(() => {
    fetch(`${foodHubAPI}/user/items/restaurants?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setRestaurant(data?.payload?.items)
        dispatch(restaurantDetails(data?.payload))
      })
  }, [id])



  return (
    <div className="RestaurantItems">
      <div className="container">
        <RestaurantMenu></RestaurantMenu>
        <div>
          <RestaurantItemsSection
            title={"POPULAR"}
            secondary={"Most ordered right now."}
            products={products}
            id="Popular"
          ></RestaurantItemsSection>

          <RestaurantItemsSection
            title={"Buy 1 Get 1"}
            secondary={"Most ordered right now."}
            products={products}
            id="Offer"
          ></RestaurantItemsSection>

          <RestaurantItemsSection
            title={"All Items"}
            secondary={"Most ordered right now."}
            products={restaurant}
            id="Offer"
          ></RestaurantItemsSection>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItems;
