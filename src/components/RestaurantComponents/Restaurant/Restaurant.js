import React from 'react';
import restaurantImg from "../../../images/Slider/offerSlider.jpg"
import "./Restaurant.css"

const Restaurant = ({ restaurant }) => {
    const { name, rating, average_cost, tk, category, fee } = restaurant
    console.log(restaurant);
    return (
        <div className='col-lg-3 col-sm-4 col-12'>
            <div className='Restaurant_card'>
                <img src={restaurantImg} alt="" className='w-100' />
                <div className='Restaurant_card_title'>
                    <h5>{name}</h5>
                    <h5><i class="fas fa-star me-2" style={{ color: "rgb(253, 197, 14)" }}></i>{rating}/5 <span className="second_title">(12k)</span></h5>
                </div>
                <p className='mt-2 mb-0 p-0 second_title'>{average_cost}</p>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p class="brand_color"><i className="far fa-heart me-2"></i> 12</p>
                    <p>12<span> tk</span> <span class="second_title">Delivery fee</span></p>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;