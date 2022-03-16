import React from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet !</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
