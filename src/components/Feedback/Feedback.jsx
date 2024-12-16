import React from "react";
import styles from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positivePercentage }) {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
