import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const [restaurant, setRestaurant] = useState([]);
  const { foodHubAPI } = useApi();

  const token = Cookies.get("__act");
  const refreshToken = Cookies.get("__rt");

  useEffect(() => {
    if (token) {
      axios.get(`${foodHubAPI}/admin/restaurants`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
        .then((res) => console.log(res));
    }
  }, []);

  return (
    <div className="RestaurantOfferSlider">
      <div className="container">
        <Slider {...settings}>
          {offerSlider.map((pd) => (
            <OfferSliderCard
              key={pd?.id}
              sliderImg={pd?.slider}
            ></OfferSliderCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RestaurantOfferSlider;
