import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FilterModal from "../FilterModal/FilterModal";
import FilterPriceRange from "../FilterPriceRange/FilterPriceRange";
import ResponsiveFilterCheck from "../ResponsiveFilterCheck/ResponsiveFilterCheck";
import "./SearchFilter.css";

const SearchFilter = () => {

  const filterOfferList = [
    {
      "id": "freeDelivery",
      "title": "Free Delivery"
    },
    {
      "id": "offer",
      "title": "Offers"
    },
    {
      "id": "onlinePayment",
      "title": "Online Payment Available"
    },
  ]

  const filterCuisinesList = [
    {
      "id": "america",
      "title": "America"
    },
    {
      "id": "asia",
      "title": "Asia"
    },
    {
      "id": "bakery",
      "title": "Bakery"
    },
    {
      "id": "bangladeshi",
      "title": "Bangladeshi"
    },
    {
      "id": "bengali",
      "title": "Bengali"
    },
    {
      "id": "biriyani",
      "title": "Biriyani"
    },
    {
      "id": "breakfast",
      "title": "Breakfast"
    },
    {
      "id": "burger",
      "title": "Burger"
    },
    {
      "id": "cafe",
      "title": "Cafe"
    },
    {
      "id": "cakeBakery",
      "title": "Cake & Bakery"
    },
    {
      "id": "chicken",
      "title": "Chicken"
    },
    {
      "id": "chinese",
      "title": "Chinese"
    },
    {
      "id": "chotpotiFuchka",
      "title": "Chotpoti & Fuchka"
    },
    {
      "id": "curry",
      "title": "Curry"
    },
    {
      "id": "dessert",
      "title": "Dessert"
    },
    {
      "id": "european",
      "title": "European"
    },
    {
      "id": "fastFood",
      "title": "Fast Food"
    },
    {
      "id": "fish",
      "title": "Fish"
    },
    {
      "id": "healthy",
      "title": "Healthy"
    },
    {
      "id": "iceCream",
      "title": "Ice Cream"
    },
    {
      "id": "indian",
      "title": "Indian"
    },
    {
      "id": "international",
      "title": "International"
    },
    {
      "id": "italian",
      "title": "Italian"
    },
    {
      "id": "japanese",
      "title": "Japanese"
    },
    {
      "id": "juiceCorner",
      "title": "Juice Corner"
    },
    {
      "id": "kabab",
      "title": "Kabab"
    },
    {
      "id": "korean",
      "title": "Korean"
    },
    {
      "id": "mexican",
      "title": "Mexican"
    },
    {
      "id": "meat",
      "title": "Meat"
    },
    {
      "id": "middleEast",
      "title": "Middle East"
    },
    {
      "id": "noodles",
      "title": "Noodles"
    },
    {
      "id": "pasta",
      "title": "Pasta"
    },
    {
      "id": "pizza",
      "title": "Pizza"
    },
  ]

  const filterVarietiesList = [
    {
      "id": "donation",
      "title": "Donation"
    },
    {
      "id": "fastFood",
      "title": "Fast Food"
    },
    {
      "id": "organic",
      "title": "Organic"
    },
  ]

  const [show, setShow] = useState(false)
  const [checkList, setCheckList] = useState("offers")
  const [screen, setScreen] = useState(992)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth)
    })
  }, [screen])





  return (
    <>
      <div className="SearchFilter disable-select">
        {show && screen > 991 && <div className="FilterModal_bg" onClick={handleClose}></div>}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
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
                  <i className="fas fa-sort-amount-down brand_color"></i>
                  Filter
                  <i className="fas fa-sort-down brand_color"></i>
                </div>


                {show && screen > 991 && <FilterModal handleClose={handleClose} filterOfferList={filterOfferList} filterCuisinesList={filterCuisinesList} filterVarietiesList={filterVarietiesList} />}


                {
                  show && screen < 992 && <div className='ResponsiveFilter'>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      animation={true}
                      fullscreen={true}
                    >
                      <div style={{ position: "relative", height: "auto", backgroundColor: "#fff" }}>
                        <i className="fas fa-times" onClick={handleClose} style={{ position: "absolute", top: "20px", left: "20px", cursor: "pointer" }}></i>

                        <div className="ResponsiveFilter_wrapper">
                          <h3>Filter</h3>
                          <div className="ResponsiveFilter_span">
                            <span onClick={() => setCheckList("offers")} className={checkList === "offers" && "activeCheckList"}>OFFERS</span>

                            <span onClick={() => setCheckList("cuisines")} className={checkList === "cuisines" && "activeCheckList"}>CUISINES</span>

                            <span onClick={() => setCheckList("varieties")} className={checkList === "varieties" && "activeCheckList"}>VARIETIES</span>

                            <span onClick={() => setCheckList("price")} className={checkList === "price" && "activeCheckList"}>PRICE</span>
                          </div>

                          <form className="mt-4">
                            {
                              checkList === "offers" && filterOfferList.map(pd => <ResponsiveFilterCheck key={[pd?.id]} item={pd} />
                              )
                            }
                            {
                              checkList === "cuisines" && filterCuisinesList.map(pd => <ResponsiveFilterCheck key={[pd?.id]} item={pd} />
                              )
                            }

                            {
                              checkList === "varieties" && filterVarietiesList.map(pd => <ResponsiveFilterCheck key={[pd?.id]} item={pd} />
                              )
                            }

                            {
                              checkList === "price" && <FilterPriceRange />
                            }
                          </form>

                        </div>
                      </div>
                    </Modal>
                  </div>
                }


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
