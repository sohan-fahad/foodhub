import React, { useEffect, useState } from "react";
// Import css files
import 'react-alice-carousel/lib/alice-carousel.css';
import OfferSliderCard from "../OfferSliderCard/OfferSliderCard";
import "./RestaurantOfferSlider.css";
import useApi from "../../../Hooks/useApi";
import Cookies from "js-cookie";
import axios from "axios";

const RestaurantOfferSlider = ({ title }) => {
  const offerSlider = [
    {
      id: 1,
      slider: "https://i.ibb.co/7t1hHNn/Slider3.jpg",
    },
    {
      id: 2,
      slider: "https://i.ibb.co/jVnnv5V/Slider2.jpg",
    },
    {
      id: 3,
      slider: "https://i.ibb.co/9qjW8t8/Slider1.jpg",
    },
    {
      id: 4,
      slider: "https://i.ibb.co/gyMH8XF/offer-Slider4.jpg",
    },
    {
      id: 5,
      slider: "https://i.ibb.co/qnnBGdF/offer-Slider.jpg",
    },
  ];


  const items = []

  offerSlider.forEach(pd => {
    items.push(<img src={pd?.slider} alt="" className="img-fluid w-100 px-2" />)
  });

  return (
    <div className="RestaurantOfferSlider">
      <div className="container">
        <OfferSliderCard
          title={title}
          items={items}
          q1={1}
          q2={2}
          q3={3}
          q4={4}
        />
      </div>
    </div>
  );
};

export default RestaurantOfferSlider;
