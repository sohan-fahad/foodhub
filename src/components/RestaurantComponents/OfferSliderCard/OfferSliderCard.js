import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./OfferSliderCard.css";
const OfferSliderCard = ({ items, title }) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };
  return (
    <div className="OfferSliderCard">
      <h3>{title && title}</h3>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default OfferSliderCard;
