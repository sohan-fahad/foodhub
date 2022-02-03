import React from 'react';
import ReactStars from "react-rating-stars-component";
import "./CorporateReview.css"

const CorporateReview = ({ review }) => {
    return (
        <div className="CorporateReview">
            <ReactStars {...{
                size: 30,
                value: review.rating,
                edit: false,
                activeColor: "var(--primary)",
            }} />
            <h3>{review?.title}</h3>
            <p>{review?.details}</p>
        </div>
    );
};

export default CorporateReview;