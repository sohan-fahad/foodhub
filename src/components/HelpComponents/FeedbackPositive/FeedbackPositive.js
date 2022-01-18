import Aos from "aos";
import React, { useState } from "react";
import "./FeedbackPositive.css";

const FeedbackPositive = ({ setHelpful, helpful }) => {
  Aos.init();

  const [helpSubmit, setHelpSubmit] = useState(false);
  const handleSubmitBtn = () => {
    setHelpSubmit(true);
  };
  return (
    <div className="FeedbackPositive">
      <div className="FeedbackPositive_modalContainer" data-aos="zoom-in">
        <i className="fas fa-times" onClick={() => setHelpful(null)}></i>
        <form className="d-flex justify-content-center mt-3">
          <div className="row g-4">
            <div className=" col-12 form-group text-center">
              <input
                type="checkbox"
                onClick={handleSubmitBtn}
                id="Information"
              />
              <label for="Information" className="feedback_option">
                Information was easy to find
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" onClick={handleSubmitBtn} id="Quality" />
              <label for="Quality" className="feedback_option w-100">
                Quality of information
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" onClick={handleSubmitBtn} id="Amount" />
              <label for="Amount" className="feedback_option w-100">
                Amount of information
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" onClick={handleSubmitBtn} id="Good" />
              <label for="Good" className="feedback_option w-100">
                Good self-service
              </label>
            </div>
            <div className=" col-6 form-group text-center">
              <input type="checkbox" onClick={handleSubmitBtn} id="Something" />
              <label for="Something" className="feedback_option w-100">
                Something else
              </label>
            </div>
            <div className=" col-12 form-group text-center mt-5">
              <input
                type="submit"
                className="w-100"
                value="SUBMIT"
                disabled={helpSubmit ? "" : "disabled"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPositive;
