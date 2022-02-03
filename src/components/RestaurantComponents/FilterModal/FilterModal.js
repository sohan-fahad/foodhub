import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FilterPriceRange from "../FilterPriceRange/FilterPriceRange";
import "./FilterModal.css";

const FilterModal = ({ filterOfferList, filterCuisinesList, filterVarietiesList, handleClose }) => {




  return (
    <>

      <div className="FilterModal">
        <div
          className="FilterModal_icon"
          onClick={handleClose}
        >
          <span><i className="fas fa-sort-amount-down brand_color me-3"></i> Filter</span>
          <i className="fas fa-sort-down brand_color"></i>
        </div>
        <div className="FilterModal_content_radio">
          <form>
            <div className="FilterModal_radio_wrappers">
              <div className="row">
                <p className="second_title fw-light">SORT</p>
                <div className="col-4">
                  <div className="form-group d-flex align-items-center">
                    <input
                      id="recommended"
                      type="radio"
                      checked
                      name="custom-radio-btn"
                    />
                    <label className="custom-radio radio-button" htmlFor="recommended"></label>
                    <label className="label-text second_title" htmlFor="recommended">Recommended</label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group d-flex align-items-center">
                    <input
                      id="topRated"
                      type="radio"
                      checked
                      name="custom-radio-btn"
                    />
                    <label className="custom-radio radio-button" htmlFor="topRated"></label>
                    <label className="label-text second_title" htmlFor="topRated">Top Rated</label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group d-flex align-items-center">
                    <input
                      id="fastDelivery"
                      type="radio"
                      checked
                      name="custom-radio-btn"
                    />
                    <label className="custom-radio radio-button" htmlFor="fastDelivery"></label>
                    <label className="label-text second_title" htmlFor="fastDelivery">Fastest Delivery</label>
                  </div>
                </div>
              </div>
            </div>
          </form>



          <form>
            <div className="FilterModal_checkbox_wrappers">
              <p className="mt-4 mb-3 second_title">OFFERS</p>
              <div className="row g-5">
                {
                  filterOfferList.map(pd => <FilterCheckbox key={pd?.id} items={pd} />)
                }
              </div>
            </div>
          </form>


          <form>
            <div className="FilterModal_checkbox_wrappers">
              <p className="mt-4 mb-3 second_title">CUISINES</p>
              <div className="row g-5">
                {
                  filterCuisinesList.map(pd => <FilterCheckbox key={pd?.id} items={pd} />)
                }
              </div>
            </div>
          </form>


          <form>
            <div className="FilterModal_checkbox_wrappers">
              <p className="mt-5 mb-2 second_title">OTHER VARIETIES</p>
              <div className="row g-5">
                {
                  filterVarietiesList.map(pd => <FilterCheckbox key={pd?.id} items={pd} />)
                }
              </div>
            </div>
          </form>


          <form>
            <p className="second_title mt-5 mb-3">PRICE</p>
            <FilterPriceRange />
          </form>
        </div>
      </div >
    </>
  );
};

export default FilterModal;
