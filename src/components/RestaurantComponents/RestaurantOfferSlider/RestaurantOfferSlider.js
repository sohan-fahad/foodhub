import React, { useEffect, useState } from "react";
// Import css files
import 'react-alice-carousel/lib/alice-carousel.css';
import OfferSliderCard from "../OfferSliderCard/OfferSliderCard";
import "./RestaurantOfferSlider.css";
import useApi from "../../../Hooks/useApi";
import Cookies from "js-cookie";
import axios from "axios";

const RestaurantOfferSlider = () => {
  const offerSlider = [
    {
      id: 1,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
    },
    {
      id: 2,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
    },
    {
      id: 3,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
    },
    {
      id: 4,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
    },
    {
      id: 5,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
    },
  ];


  const items = []

  offerSlider.forEach(pd => {
    items.push(<img src={pd?.slider} alt="" className="img-fluid w-100 px-2" />)
  });

  return (
    <div className="RestaurantOfferSlider">
      <div className="container">
        <OfferSliderCard items={items} />
      </div>
    </div>
  );
};

export default RestaurantOfferSlider;
