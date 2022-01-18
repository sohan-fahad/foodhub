import React, { useState } from "react";
import useMethod from "../../../Hooks/useMethod";
import FilterModal from "../FilterModal/FilterModal";
import "./SearchFilter.css";

const SearchFilter = () => {
  const { show, setShow, handleClose, handleShow } = useMethod();
  return (
    <div className="SearchFilter disable-select">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="filter_container">
              <div className="searchIcon_container">
                <i className="fas fa-search"></i>
              </div>
              <div className="searchInput_container">
                <input
                  type="text"
                  className="w-100 p-3 border-0"
                  placeholder="Search for cuisines, and dishes"
                />
              </div>
              <div
                className="filterIcon_container second_title"
                onClick={handleShow}
              >
                <i className="fas fa-sort-amount-down me-2 brand_color"></i>
                Filter
                <i className="fas fa-sort-down ms-2 brand_color"></i>
              </div>
            </div>
            <FilterModal show={show} handleClose={handleClose}></FilterModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
