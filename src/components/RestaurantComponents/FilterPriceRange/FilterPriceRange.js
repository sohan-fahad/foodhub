import React from 'react';
import "./FilterPriceRange.css"

const FilterPriceRange = () => {
    return (
        <div className='FilterPriceRange'>
            <div className="row g-3">
                <div className="col-lg-4 col-sm-4 col-12">
                    <div className="priceRange">
                        <input type="checkbox" id="priceLow" />
                        <label htmlFor="priceLow">৳</label>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-12">
                    <div className="priceRange">
                        <input type="checkbox" id="priceMid" />
                        <label htmlFor="priceMid">৳৳</label>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-12">
                    <div className="priceRange">
                        <input type="checkbox" id="priceHigh" />
                        <label htmlFor="priceHigh">৳৳৳</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPriceRange;