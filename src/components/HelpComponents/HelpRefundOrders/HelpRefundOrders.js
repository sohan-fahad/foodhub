import React from "react";
import { Accordion } from "react-bootstrap";
import FeedBackBtn from "../FeedBackBtn/FeedBackBtn";
import "./HelpRefundOrders.css";
import AOS from "aos";

const HelpRefundOrders = () => {
  AOS.init();
  return (
    <div className="HelpRefundOrders" data-aos="fade-left">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Refund account and usage</Accordion.Header>
          <Accordion.Body>
            <p>
              We'll credit eligble refunds from cancelled orders paid with
              debit/credit card into refund account instantly. You can use
              refunds that have been credited to your refund account to pay for
              all foodpanda orders either in full or together with another
              online payment method. Read more on our T&Cs{" "}
              <a className="brand_color">here</a>.
            </p>
            <FeedBackBtn></FeedBackBtn>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Transfer to a friend</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <FeedBackBtn></FeedBackBtn>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Transfer to a friend</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <FeedBackBtn></FeedBackBtn>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Transfer to a friend</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <FeedBackBtn></FeedBackBtn>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HelpRefundOrders;
