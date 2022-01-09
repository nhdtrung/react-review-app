import { motion, AnimatePresense } from "framer-motion";
import { useContext } from "react";
import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return "No feedback yet!!!";
  }

  // FeedbackList.propTypes = {
  //   feedback: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       text: PropTypes.string.isRequired,
  //       rating: PropTypes.number.isRequired,
  //     })
  //   ),
  // };

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default FeedbackList;
