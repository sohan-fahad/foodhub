import Aos from "aos";
import React from "react";
import "./FeedbackNegative.css";

const FeedbackNegative = ({ setHelpful }) => {
  Aos.init();
  return (
    <div className="FeedbackNegative" data-aos="zoom-in">
      <div className="FeedbackNegative_modalContainer">
        <i className="fas fa-times" onClick={() => setHelpful(null)}></i>
        <form className="d-flex justify-content-center mt-3">
          <div className="row g-4">
            <div className=" col-12 form-group text-center">
              <input type="checkbox" id="Information" />
              <label for="Information" className="feedback_option">
                Information was hard to find
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" id="Quality" />
              <label for="Quality" className="feedback_option w-100">
                Add more information
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" id="Amount" />
              <label for="Amount" className="feedback_option w-100">
                Quality of information
              </label>
            </div>
            <div className="col-6 form-group text-center">
              <input type="checkbox" id="Good" />
              <label for="Good" className="feedback_option w-100">
                I couldn't reach out the agent
              </label>
            </div>
            <div className=" col-6 form-group text-center">
              <input type="checkbox" id="Something" />
              <label for="Something" className="feedback_option w-100">
                Something else
              </label>
            </div>
            <div className=" col-12 form-group text-center mt-5">
              <input type="submit" className="w-100" value="SUBMIT" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackNegative;
