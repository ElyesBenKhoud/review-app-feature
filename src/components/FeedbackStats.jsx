import React from "react";
import propTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  //calculate rating avrg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // 1 decimal output in case of many decimal numbers no needs for
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};
export default FeedbackStats;
