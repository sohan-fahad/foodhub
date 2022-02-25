import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferSliderCard from "../OfferSliderCard/OfferSliderCard";
import "./RecommendedSliders.css";

const RecommendedSliders = ({ title }) => {

  const offerSlider = [
    {
      id: 1,
      slider: "https://i.ibb.co/7t1hHNn/Slider3.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 2,
      slider: "https://i.ibb.co/qnnBGdF/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 3,
      slider: "https://i.ibb.co/gyMH8XF/offer-Slider4.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 4,
      slider: "https://i.ibb.co/9qjW8t8/Slider1.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 5,
      slider: "https://i.ibb.co/jVnnv5V/Slider2.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
  ];

  const items = []

  offerSlider.forEach(pd => {
    items.push(<div className="RecommendedSlider">
      <img src={pd?.slider} className="img-fluid w-100" />
      <div className="title">
        <h5>{pd?.name}</h5>
        <h5>
          <i className="fas fa-star me-2" style={{ color: "#fdc50e" }}></i>
          {pd?.rating}/5 <span className="second_title">(12k)</span>
        </h5>
      </div>
      <div>
        <span className="fw-bold">৳</span>
        <span className="fw-bold">৳</span>
        <span className="fw-bold">৳</span>
      </div>
      <hr />
      <div className="SliderCardFooter">
        <p className="brand_color">
          <i className="far fa-heart me-2"></i> {pd?.reactLove}
        </p>
        <p>
          {pd?.tk}<span> tk</span> <span className="second_title">Delivery fee</span>
        </p>
      </div>
      <div className="offer_details">
        <p>15% OFF+BIRYANI150 </p>
      </div>
    </div>)
  });


  return (
    <div className="RecommendedSliders">
      <div className="container">
        <OfferSliderCard items={items}
          title={title}
          q1={1}
          q2={2}
          q3={3}
          q4={4}
        />
      </div>
    </div>
  );
};

export default RecommendedSliders;
