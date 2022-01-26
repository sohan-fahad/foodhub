import React from "react";
import RestaurantItemsSection from "../PopularItems/RestaurantItemsSection";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import itemImg from "../../../images/item.jpg";
import "./RestaurantItems.css";

const RestaurantItems = () => {
  const products = [
    {
      id: 1,
      name: "Title Name",
      detail: "loream dfjisfjoisafdjio dsfhkashshjkjks hjsd",
      price: 125,
      itemImg: itemImg,
    },
    {
      id: 2,
      name: "Title Name",
      detail: "loream dfjisfjoisafdjio dsfhkashshjkjks hjsd",
      price: 125,
      itemImg: itemImg,
    },
  ];
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
        </div>
      </div>
    </div>
  );
};

export default RestaurantItems;
