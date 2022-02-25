import React from 'react';
import "./ResponsiveFilterCheck.css"

const ResponsiveFilterCheck = ({ item }) => {
    return (
        <div className='ResponsiveFilterCheck mb-3'>
            <div className="form-group d-flex align-items-center">
                <input
                    id={item?.id}
                    type="checkbox"
                    name="custom-radio-btn"
                />
                <label className="custom-radio checkbox-button" htmlFor={item?.id}><i className="fas fa-check-square w-100"></i></label>
                <label className="label-text second_title" htmlFor={item?.id}>{item?.title}</label>
            </div>
        </div>
    );
};

export default ResponsiveFilterCheck;