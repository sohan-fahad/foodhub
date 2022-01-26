import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import DeliverPlace from "../../DeliverPlace/DeliverPlace";
import CorporateHeader from "../../Corporate/CorporateHeader/CorporateHeader"
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import checkAuth from "../../../store/action/checkAuth";
import logOut from "../../../store/action/LogOut";
import store from "../../../store/store";
import Cookies from "js-cookie";
import TopMenu from "../TopMenu/TopMenu";

const Header = () => {

  const { closeHeaderReducer } = store.getState();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [pathLocation, setPathLocation] = useState("")

  const dispatch = useDispatch();
  const { token, firstName } = useSelector((state) => state.authCheckReducer);
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const logOutUser = (e) => {
    e.preventDefault();
    dispatch(checkAuth({}));
    dispatch(logOut({}));
    Cookies.remove("__act");
    Cookies.remove("__rt");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    navigate("/");
  };

  useEffect(() => {
    if (userDetails) {
      dispatch(checkAuth(userDetails.payload));
    }
  }, []);

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



  return (
    <>
      <div className="Header sticky-top" id="Header">
        {closeHeaderReducer && <TopMenu></TopMenu>}
        <div className="container">
          <div className="header_container">
            <Navbar.Brand as={Link} to="/" className="brand_Logo">
              LOGO
            </Navbar.Brand>
            {pathLocation === "find" && (
              <div className="deliverPlace_container1">
                <DeliverPlace></DeliverPlace>
              </div>
            )}

            {
              pathLocation === "corporate" ? <CorporateHeader></CorporateHeader> :
                <div className="d-flex">
                  {!token ? (
                    <Nav.Link as={HashLink} to="/auth/new">
                      LOGIN
                    </Nav.Link>
                  ) : (
                    <div className="user_menu_container">
                      <i className="fas fa-user"></i>
                      <NavDropdown
                        title={firstName || "NAME"}
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
                        <NavDropdown.Item as={HashLink} to="/user/help">
                          HELP CENTER
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="" onClick={logOutUser}>
                          LOG OUT
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  )}

                  <a href="#">
                    <i className="fas fa-shopping-bag"></i>
                    <span>0</span>
                  </a>
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
