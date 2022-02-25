import React from 'react';
import "./FilterCheckbox.css"

const FilterCheckbox = ({ items }) => {
    return (
        <div className="col-4">
            <div className='FilterCheckbox'>
                <div className="form-group d-flex align-items-center">
                    <input
                        id={items?.id}
                        type="checkbox"
                        name="custom-radio-btn"
                    />
                    <label className="custom-radio checkbox-button" htmlFor={items?.id}><i className="fas fa-check-square w-100"></i></label>
                    <label className="label-text second_title" htmlFor={items?.id}>{items?.title}</label>
                </div>
            </div>
        </div>
    );
};

export default FilterCheckbox;