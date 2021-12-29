import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrBtn = Object.keys(options);
  return (
    <ul className={styles.feedbackBtnList}>
      {arrBtn.map(btn => (
        <li className={styles.feedbackBtnItem} key={btn}>
          <button
            className={styles.btn}
            type="button"
            onClick={onLeaveFeedback}
            name={btn}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
