import React from "react";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className="Work_Process">
      <div className="container">
        <h1 className="text-center">How it works</h1>
        <p>The Process of our service</p>
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="work_process_card">
              <div className="work_process_icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Order Your Food</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="work_process_card">
              <div className="work_process_icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Delivery Location</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <div className="work_process_card">
              <div className="work_process_icon">
                <i className="fas fa-gift"></i>
              </div>
              <h3>Delivery or Pick up</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
