import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./OfferSliderCard.css";
const OfferSliderCard = ({ items, title, q1, q2, q3, q4 }) => {
  const responsive = {
    0: { items: q1 },
    600: { items: q2 },
    768: { items: q3 },
    1024: { items: q4 },
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
