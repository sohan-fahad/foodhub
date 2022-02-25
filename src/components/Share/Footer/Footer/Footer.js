import React, { useState } from "react";
import Copyright from "../Copyright/Copyright";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterSocialIcon from "../FooterSocialIcon/FooterSocialIcon";
import "./Footer.css"
import logo from "../../../../images/greyLogo.png"
import { Link } from "react-router-dom";

const Footer = () => {

  const [footerState, setFooterState] = useState("hide")

  return (
    <div className="Footer">
      <div className="container">
        <h3 className="mb-5 first_title fs-4 fw-bold">Order food from the best restaurants and shops with foodhub Bangladesh</h3>
        <p className="second_title">Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodhub Bangladesh is the right destination for you! foodhub offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodhub Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from foodhub, too? Check out foodhub shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let foodhub Bangladesh take the pressure off your shoulders.</p>

        {
          footerState === "hide" &&
          < button className="Footer_read_more_btn"
            onClick={() => setFooterState("readMore")}
          >Click here to read more</button>}

        {
          footerState === "readMore" &&
          < button className="Footer_read_more_btn"
            onClick={() => setFooterState("hide")}
          >Hide</button>}

        {
          footerState === "readMore" &&
          <div className="mt-4 px-4">
            <h4 className="mb-4 first_title fs-5 fw-bold">Why choose foodpanda?</h4>
            <ul className="Footer_ul mt-2 ms-0 ps-0">
              <li>
                <span className="brand_color me-2">✓</span>
                More options: food delivery from 2000+ restaurants in Dhaka, Chittagong and Sylhet in Bangladesh, as well as Bangladesh grocery delivery and more from shop partners. Order from cuisines ranging from fast food, to sushi, to cakes. Shop online for everything from fresh produce to electronics.
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                Easy search: filter by cuisine or location, or simply type in the name of the bsiness you want.
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                Various offers: indulge in the endless discounts and offers available from top restaurants and shops.
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                Payment options: Payment made easier with cash on delivery and online payment options
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                A simple 4-step food ordering process: Search → Choose → Pay → Enjoy
              </li>
            </ul>

            <hr className="my-4" />

            <h4 className="mb-4 first_title fs-5 fw-bold">Choose from over 25 cuisines and order online now!
            </h4>

            <p className="second_title">
              From the first step of choosing your location to receiving the food, foodpanda makes ordering the food you love easy. Want some Indian, Mexican or Middle Eastern food? Take your tastebuds on a journey around the world with the vast range of cuisines available at your fingertips. Order your favourite soup, salad, sandwich or dessert from the finest restaurants in your area or affordable local favourites. Choose home delivery to sit back and relax, or select Pick-Up to self-collect when you're on the go. Let foodpanda take care of it.
            </p>


            <h4 className="mt-5 mb-4 first_title fs-5 fw-bold">Get grocery delivery in Bangladesh with foodpanda shops
            </h4>
            <p className="second_title">
              Missing milk? Batteries? Detergent? foodpanda shops delivers all your essential grocery items through the foodpanda app. It's everyday online shopping made easy. Choose anything from daily essentials to grocery to health to pharmaceuticals and even electronics. Head to checkout and our pandamart rider will be at your door in a flash.
            </p>


            <ul className="Footer_ul mt-2 ms-0 ps-0">
              <li>
                <span className="brand_color me-2">✓</span>
                over 20,000 items
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                select your grocery store
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                everyday affordable items delivered
              </li>
              <li>
                <span className="brand_color me-2">✓</span>
                25 minute average delivery time
              </li>
            </ul>


            <hr className="my-4" />


            <h4 className="mt-5 mb-4 first_title fs-5 fw-bold">Home delivery via foodpanda's mobile app
            </h4>
            <p className="second_title">
              Even while on the move, you can order food online anytime and anywhere, thanks to the foodpanda mobile app for iOS, Android and Windows Phone devices. Simple, fast and convenient - it's the simplest online food ordering process in Bangladesh. With an impressive choice of restaurants and shops , foodpanda Bangladesh is confident you'll find just what you're looking for. Browse through the menus, make your choices, go to checkout and then sit back and wait for your order to arrive.
            </p>


          </div>
        }
        <hr className="mt-4 mb-4" />

        <div className="footer-logo-wrapper">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <img src={logo} alt="" className="img-fluid" style={{ width: "20%" }} />
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <div class="footer__social">
                <Link to="#" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </Link>
                <Link to="#" target="_blank">
                  <i class="fab fa-instagram-square"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <hr className="mt-4 mb-4" />

        <div className="footer__wrapper__middle">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <p className="second_title">
                © 2022 foodhub
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <nav class="footer__nav">
                <ul>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/press.htm">Press</Link>
                  </li>
                  <li class="contact-link" id="contact-link">
                    <Link to="javascript://" data-no-turbolink="true" target="_blank">Help center
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/terms-and-conditions.htm">Terms and conditions</Link></li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/privacy.htm">Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/refund-account-terms-and-conditions">Refund Account Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/cashback-terms">Cashback Program
                    </Link>
                  </li>
                  <li class="footer_nav_security">
                    <Link to="https://www.foodora.com/security" target="_blank">Security
                    </Link>
                  </li>
                  <li>
                    <Link to="https://foodpandasg.formstack.com/forms/becomeapartner_bd">Partner with us
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/How-it-works">How foodpanda works
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/apps">Download foodpanda Apps
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/careers.htm">Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="https://corporate.foodpanda.com.bd/">Corporate Customer
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/deals">foodpanda Deals
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/groceries">Grocery delivery</Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/affiliates">Become an affiliate
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.foodpanda.com.bd/contents/all-cities-bangladesh">All cities
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4" />

        <div class="Footer_othercountries">

          <p>
            <Link to="https://www.foodpanda.com.mm/">Myanmar</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.la/">Laos</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.hk/">Hong Kong</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.pk/">Pakistan</Link> &nbsp; |&nbsp;&nbsp;
            <Link to="https://www.foodpanda.sg/">Singapore</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.my/">Malaysia</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.ph/">Philippines</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.co.th/">Thailand</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.com.tw">Taiwan</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.com.kh/">Cambodia</Link> &nbsp; | &nbsp;
            <Link to="https://www.foodpanda.co.jp/">Japan</Link> &nbsp;</p>

        </div>
      </div>
      {/* <FooterInfo></FooterInfo>
      <FooterSocialIcon></FooterSocialIcon>
      <Copyright></Copyright> */}
    </div >
  );
};

export default Footer;
