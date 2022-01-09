import { motion, AnimatePresense } from "framer-motion";
import { useContext } from "react";
import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return "No feedback yet!!!";
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} />
        );
      })}
    </div>
  );
}

export default FeedbackList;
