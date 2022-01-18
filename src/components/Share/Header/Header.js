import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import useAuthentication from "../../../Hooks/useAuthentication";
import DeliverPlace from "../../DeliverPlace/DeliverPlace";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import checkAuth from "../../../store/action/checkAuth";
import logOut from "../../../store/action/LogOut";
import store from "../../../store/store";

const Header = () => {
  const { restaurantPath, setRestaurantPath } = useAuthentication();

  const location = useLocation().pathname;

  const dispatch = useDispatch();
  const { token, firstName } = useSelector((state) => state.authCheckReducer);

  // const state = store.getState();
  const [user, setUser] = useState({});

  const userDetails = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userDetails) {
      dispatch(checkAuth(userDetails.payload));
      const { payload } = userDetails;
      setUser(payload);
    }
  }, []);

  if (location === "/restaurant/new") {
    setRestaurantPath(true);
  } else if (location === "/restaurant/name") {
    setRestaurantPath(true);
  } else {
    setRestaurantPath(false);
  }

  return (
    <div className="Header sticky-top" id="Header">
      <div className="container">
        <div className="header_container">
          <Navbar.Brand as={Link} to="/" className="brand_Logo">
            LOGO
          </Navbar.Brand>
          {restaurantPath && (
            <div className="deliverPlace_container1">
              <DeliverPlace></DeliverPlace>
            </div>
          )}
          <div className="d-flex">
            {!token ? (
              <Nav.Link as={HashLink} to="/login#login">
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
                  <NavDropdown.Item as={HashLink} to="/user/name#profile">
                    PROFILE
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to="/user/refund#refund">
                    REFUND
                  </NavDropdown.Item>

                  <NavDropdown.Item as={HashLink} to="/user/name/order#order">
                    ORDER LIST
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to="/user/refund#refund">
                    REFUND ORDER
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    to="/user/name/vouchers#vouchers"
                  >
                    VOUCHER
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} to="/help#help">
                    HELP CENTER
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    to=""
                    onClick={() => dispatch(logOut())}
                  >
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
        </div>
      </div>
      {restaurantPath && (
        <div className="deliverPlace_container2">
          <DeliverPlace></DeliverPlace>
        </div>
      )}
    </div>
  );
};

export default Header;
