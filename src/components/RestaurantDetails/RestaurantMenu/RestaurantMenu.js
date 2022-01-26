import React, { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuItem from "./MenuItem";
import useMethod from "../../../Hooks/useMethod";
import { Modal, ModalBody } from "react-bootstrap";

const RestaurantMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Popular",
    },
    {
      id: 2,
      name: "Offer",
    },
    {
      id: 3,
      name: "Burger",
    },
    {
      id: 4,
      name: "Pizza",
    },
    {
      id: 5,
      name: "Biriyani",
    },
    {
      id: 6,
      name: "Polao",
    },
    {
      id: 7,
      name: "Korma",
    },
    {
      id: 8,
      name: "Korma",
    },
  ];

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [control, setControl] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      setShow(false);
    }
  });

  return (
    <div className="RestaurantMenu">
      <div className="RestaurantMenu_search_wrapper">
        <i className="fas fa-search me-3"></i>
        <input type="text" placeholder="Search in menu" />
      </div>
      <div
        className="RestaurantMenu_search_wrapper1"
        onClick={() => handleShow(true)}
      >
        <i className="fas fa-search me-3"></i>
      </div>
      <div className="RestaurantMenu_list_wrapper">
        <div className="RestaurantMenu_list">
          <Slider {...settings}>
            {menuItems.map((pd) => (
              <MenuItem key={pd?.id} name={pd?.name}></MenuItem>
            ))}
          </Slider>
        </div>
      </div>
      <Modal
        show={show}
        dialogClassName="modal-90w"
        onHide={() => setShow(false)}
        scrollable
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-arrow-left brand_color"
                onClick={handleClose}
              ></i>
            </div>
            <input
              type="text"
              placeholder="Search in menu"
              style={{
                width: "90%",
                padding: "10px",
                border: "none",
                outline: "none",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RestaurantMenu;
