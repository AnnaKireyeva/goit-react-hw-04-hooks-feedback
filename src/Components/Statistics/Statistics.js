import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={styles.statisticList}>
    <li className={styles.statisticItem}>Good: {good}</li>
    <li className={styles.statisticItem}>Neutral: {neutral}</li>
    <li className={styles.statisticItem}>Bad: {bad}</li>
    <li className={styles.statisticItem}>Total: {total}</li>
    <li className={styles.statisticItem}>
      Positive feedback: {positiveFeedback}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
