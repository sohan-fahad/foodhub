import React, { useState } from "react";
import useMethod from "../../../Hooks/useMethod";
import FeedbackNegative from "../FeedbackNegative/FeedbackNegative";
import FeedbackPositive from "../FeedbackPositive/FeedbackPositive";
import "./FeedBackBtn.css";

const FeedBackBtn = () => {
  const { helpful, setHelpful } = useMethod();
  return (
    <div className="FeedBackBtn">
      <p className="text-center second_title mt-5">Was this helpful?</p>
      <button className="mb-3" onClick={() => setHelpful(true)}>
        YES! I GOT MY ANSWER.
      </button>
      <button onClick={() => setHelpful(false)}>
        NO! ADD MORE INFORMATION.
      </button>
      {helpful && <FeedbackPositive setHelpful={setHelpful}></FeedbackPositive>}
      {helpful === false && (
        <FeedbackNegative setHelpful={setHelpful}></FeedbackNegative>
      )}
    </div>
  );
};

export default FeedBackBtn;
