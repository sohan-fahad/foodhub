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
      slider: "https://previews.123rf.com/images/magone/magone1812/magone181200046/113760946-bol-de-nourriture-asiatique-riz-avec-viande-et-l%C3%A9gumes-isol%C3%A9s-sur-fond-blanc-vue-de-dessus.jpg",
      name: "Asian"
    },
    {
      id: 2,
      slider: "https://previews.123rf.com/images/grafner/grafner1505/grafner150500042/40558742-fast-food-pasto-su-sfondo-bianco.jpg",
      name: "Fast Food"
    },
    {
      id: 3,
      slider: "https://thumbs.dreamstime.com/b/bowl-tasty-rice-vegetables-white-background-top-view-141306208.jpg",
      name: "Rice Dishes"
    },
    {
      id: 4,
      slider: "https://previews.123rf.com/images/ritts/ritts1802/ritts180200009/95120949-different-salty-snacks-in-a-bowl-and-white-background.jpg",
      name: "Snack"
    },
    {
      id: 5,
      slider: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-1200px-Burger_King_-_Angus_XT_Burger.tiff.png",
      name: "Snacks"
    },
    {
      id: 6,
      slider: "https://previews.123rf.com/images/grafner/grafner1505/grafner150500042/40558742-fast-food-pasto-su-sfondo-bianco.jpg",
      name: "Snacks"
    },
    {
      id: 7,
      slider: "https://i.pinimg.com/originals/fe/9e/a4/fe9ea43fa9e4d29f96742378aaf7bb22.jpg",
      name: "Burgers"
    },
    {
      id: 8,
      slider: "https://media.istockphoto.com/photos/pizza-picture-id175385309?k=20&m=175385309&s=612x612&w=0&h=I6I0_Du_OLxkonjo6Gby7_7W1HEqV3ZGMlMLuq5UHzM=",
      name: "Bangladeshi"
    },
    {
      id: 9,
      slider: "https://thumbs.dreamstime.com/b/fried-chicken-legs-isolated-white-background-deep-crispy-fast-food-clipping-path-146069919.jpg",
      name: "Meat"
    },
    {
      id: 10,
      slider: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxF7Vob42OBvjixzGLAMX9qORlBdZ8LS6vx_11WPwaZb65MiqDS53Uqz1DlQdiRrkixE&usqp=CAU",
      name: "Chicken"
    },
    {
      id: 11,
      slider: "https://i.pinimg.com/originals/fe/9e/a4/fe9ea43fa9e4d29f96742378aaf7bb22.jpg",
      name: "Pizza"
    },
    {
      id: 12,
      slider: "https://previews.123rf.com/images/grafner/grafner1505/grafner150500042/40558742-fast-food-pasto-su-sfondo-bianco.jpg",
      name: "Pasta"
    },
  ];

  const items = []

  offerSlider.forEach(pd => {
    items.push(<div className="cuisines_slider_card" style={{ position: "relative" }}>
      <img src={pd?.slider} alt="" className="img-fluid w-100 px-2" />
      <p style={{ position: "absolute", bottom: "0", left: "10px" }} className="secondary_color fw-bold">{pd?.name}</p>
    </div>)
  });

  return (
    <div className="CuisinesSlider">
      <div className="container">
        <OfferSliderCard items={items}
          title={"Cuisines"}
          q1={2}
          q2={4}
          q3={6}
          q4={11}
        />
      </div>
    </div>
  );
};

export default CuisinesSlider;
