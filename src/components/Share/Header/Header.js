import React, { useCallback, useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import DeliverPlace from "../../DeliverPlace/DeliverPlace";
import CorporateHeader from "../../Corporate/CorporateHeader/CorporateHeader"
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import checkAuth from "../../../store/action/checkAuth";
import TopMenu from "../TopMenu/TopMenu";
import useAuthentication from "../../../Hooks/useAuthentication";
import { totalQuantity } from "../../../store/action/totalQuantity";
import logo from "../../../images/logo.png"
import WhenAsap from "../../RestaurantComponents/WhenAsap/WhenAsap";

const Header = () => {

  const [showName, setShowName] = useState(true)
  // const [cartInfo, setCartInfo] = useState({})

  const headerPopup = localStorage.getItem("headerPopup")
  const headerPopUp = useSelector(state => state.closeHeaderReducer);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const { control, setControl } = useAuthentication()



  const [pathLocation, setPathLocation] = useState("")
  const [userName, setUserName] = useState("")

  const dispatch = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const { user } = useSelector((state) => state.authCheckReducer)
  const { headerQuantity, restaurantPath } = useSelector((state) => state.totalQuantityReducer)


  useEffect(() => {
    if (userDetails) {
      setUserName(user?.firstName)
    }
    else {
      setUserName("")
    }
  }, [user?.firstName])



  const logOutUser = (e) => {
    e.preventDefault();
    dispatch(checkAuth({}));
    localStorage.removeItem("user");
    localStorage.removeItem("expire_session");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("qtnty");
    localStorage.removeItem("rstid");
    dispatch(totalQuantity({}, ""))
    navigate("/");
    setControl(!control)
  };


  useEffect(() => {
    if (location === "/restaurant/new") {
      setPathLocation("find");

    } else if (location === "/restaurantdetails") {
      setPathLocation("find");

    } else if (location === "/corporate") {
      setPathLocation("corporate");
    }
    else {
      setPathLocation("");
    }

  }, [location])

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setShowName(false);
    }
    else {
      setShowName(true)
    }
  });



  return (
    <>
      <div className="Header sticky-top" id="Header">
        {headerPopUp && !headerPopup && <TopMenu></TopMenu>}
        <div className="div_wrapper">
          <div className="header_container">
            <Navbar.Brand as={Link} to="/" className="brand_Logo">
              <img src={logo} alt="" className="img-fluid w-75" />
            </Navbar.Brand>
            {pathLocation === "find" && (
              <div className="deliverPlace_container1">
                <DeliverPlace></DeliverPlace>
              </div>
            )}

            {
              pathLocation === "corporate" ? <CorporateHeader></CorporateHeader> :
                <div className="d-flex align-items-center">
                  <div class="language-wrapper">
                    <div class="language-switch">
                      <button>
                        EN
                      </button>
                      <button>
                        BN
                      </button>
                    </div>
                  </div>
                  {!userDetails ? (
                    <Nav.Link as={HashLink} to="/auth/new">
                      LOGIN
                    </Nav.Link>
                  ) : (
                    <div className="user_menu_container">
                      <i className="fas fa-user"></i>
                      <NavDropdown
                        title={showName ? userName : ""}
                        id="navbarScrollingDropdown"
                        className="user_profile"
                      >
                        <NavDropdown.Item as={HashLink} to="/user/profile">
                          PROFILE
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/user/refund">
                          REFUND
                        </NavDropdown.Item>

                        <NavDropdown.Item as={HashLink} to="/user/orders">
                          ORDER LIST
                        </NavDropdown.Item>

                        <NavDropdown.Item as={HashLink} to="/user/vouchers">
                          VOUCHER
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/rewards/challenges">
                          REWARDS
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/user/help">
                          HELP CENTER
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="" onClick={logOutUser}>
                          LOG OUT
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  )}

                  <Nav.Link as={HashLink} to={restaurantPath ? restaurantPath : "/"}>
                    <div className="d-flex">
                      <i className="fas fa-shopping-bag" style={{ fontSize: "25px" }}></i>
                      <span>{headerQuantity ? headerQuantity : ""}</span>
                    </div>
                  </Nav.Link>
                  {
                    user &&
                    <Nav.Link as={HashLink} to={restaurantPath ? restaurantPath : "/"}>
                      <i class="fas fa-heart" style={{ fontSize: "25px" }}></i>
                    </Nav.Link>
                  }
                </div>
            }


          </div>
        </div>
        {pathLocation === "find" && (
          <div className="deliverPlace_container2">
            <DeliverPlace></DeliverPlace>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
