import React from "react";
import "./VerifyAccount.css";
import BackBtn from "../../Share/BackBtn/BackBtn";
import verifyImg from "../../../images/veriifyImg.png";

const VerifyAccount = () => {
  return (
    <div className="VerifyAccount">
      <div className="verify_account_wrapper">
        <BackBtn></BackBtn>
        <img src={verifyImg} alt="" />
        <h3>Verify your account!</h3>
        <p>
          We want to send a verification code. Choose method to verify your
          account.
        </p>

        <div className="verify_checkbox_form_container">
          <form>
            <div className="form-group">
              <input
                id="check_email"
                type="radio"
                checked
                name="custom-radio-btn"
              />
              <label className="custom-radio" for="check_email"></label>
              <span className="label-text">Email: *****m@email.com</span>
            </div>
            <div className="form-group">
              <input id="check_text" type="radio" name="custom-radio-btn" />
              <label className="custom-radio" for="check_text"></label>
              <span className="label-text">Text: ******1212</span>
            </div>
            <input type="submit" value="SEND SECURITY CODE" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
