import React from 'react';
import "./CorporateReviews.css"
import corporateMap from "../../../images/corporate-map-01.webp"
import CorporateReview from '../CorporateReview/CorporateReview';
import Slider from 'react-slick';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const CorporateReviews = () => {
    const reviews = [
        {
            "id": 1,
            "title": "Amazing Experience",
            "details": "We use foodhub for business for individual meals, lunch meetings and even large townhall events. With exclusive discounts, dedicated support and large variety of vendors, ordering food has never been so easy!",
            "rating": 5
        },
        {
            "id": 2,
            "title": "Wow Experience",
            "details": "foodhub made it so easy for us to manage a corporate meal solution for our 2,000 employees. Food brings our team together in a natural way. Our team appreciates that we’ve made the service available.",
            "rating": 3.5
        },
        {
            "id": 3,
            "title": "Ok Experience",
            "details": "We use foodhub for business for individual meals, lunch meetings and even large townhall events. With exclusive discounts, dedicated support and large variety of vendors, ordering food has never been so easy!",
            "rating": 5
        },
        {
            "id": 4,
            "title": "Nice Experience",
            "details": "foodhub made it so easy for us to manage a corporate meal solution for our 2,000 employees. Food brings our team together in a natural way. Our team appreciates that we’ve made the service available.",
            "rating": 5
        },
    ]

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };
    return (
        <div className='CorporateReviews'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6  col-12">
                        <div className="CorporateReviews_img">
                            <img src={corporateMap} className='w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6  col-12">
                        <h1>Don’t take our word for it</h1>
                        <p>Foodhub for business is available in 14 countries worldwide, serving more than 50,000 users in 3,000 companies. Here’s what our clients say:</p>

                        <Slider {...settings}>
                            {reviews.map((review) => (
                                <CorporateReview key={review?.id} review={review} />
                            ))}
                        </Slider>

                        <Nav.Link as={HashLink} to="/corporate#CorporateSingUp">
                            FIND OUT MORE
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateReviews;