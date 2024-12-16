import React from "react";
import styles from "./Options.module.css";

function Options({ onLeaveFeedback, onResetFeedback, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;
