import PropTypes from 'prop-types';
import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length == 0) {
    return "No feedback yet!!!";
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
          return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ),
}

export default FeedbackList;
