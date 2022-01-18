import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferSliderCard from "../OfferSliderCard/OfferSliderCard";
import "./RecommendedSliders.css";
import RecommendedSlider from "../RecommendedSlider/RecommendedSlider";

const RecommendedSliders = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offerSlider = [
    {
      id: 1,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 2,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 3,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 4,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
    {
      id: 5,
      slider: "https://i.ibb.co/PWBfmYV/offer-Slider.jpg",
      name: "Food Name",
      rating: 4.7,
      priceRange: 3,
      reactLove: 12,
      tk: 12,
    },
  ];
  return (
    <div className="RecommendedSliders">
      <div className="container">
        <h3>Recommended for you</h3>
        <Slider {...settings}>
          {offerSlider.map((pd) => (
            <RecommendedSlider key={pd?.id} sliderItem={pd}></RecommendedSlider>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedSliders;
