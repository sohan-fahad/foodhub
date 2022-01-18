import React from "react";
import BackBtn from "../../Share/BackBtn/BackBtn";
import "./VerifyCode.css";
import confirmImg from "../../../images/veriifyImg.png";

const VerifyCode = () => {
  return (
    <div className="VerifyCode">
      <div className="verify_code_wrapper">
        <BackBtn></BackBtn>
        <img src={confirmImg} alt="" />
        <h3>Help us verify Your login</h3>
        <p>
          We have sent a verification code to the phone number registered in
          this account, please enter the code below :
        </p>
        <p>(+880) ******7896</p>
        <form>
          <input
            type="text"
            name="verify_code"
            placeholder="Verification Code"
            required
          />
          <label>Resend code in 30 second.</label>
          <input type="submit" value="VERIFY" />
        </form>
        <p className="mt-4">Not receiving a message? Let us call you instesd</p>
      </div>
    </div>
  );
};

export default VerifyCode;
