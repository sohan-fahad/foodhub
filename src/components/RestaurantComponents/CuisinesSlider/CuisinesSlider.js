import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CuisinesSlider.css";
import OfferSliderCard from "../OfferSliderCard/OfferSliderCard";

const CuisinesSlider = () => {

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
    <div className="CuisinesSlider">
      <div className="container">
        <OfferSliderCard items={items} title={"Cuisines"} />
      </div>
    </div>
  );
};

export default CuisinesSlider;
