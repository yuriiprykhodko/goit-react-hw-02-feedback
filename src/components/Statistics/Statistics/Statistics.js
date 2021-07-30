import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';
const Statistics = ({
  good,
  neutral,
  bad,
  positiveFeedBack,
  countTotalFeedback,
}) => (
  <div className="stats">
    <span className="value">Good: {good}</span>
    <span className="value">Neutral: {neutral}</span>
    <span className="value">Bad: {bad}</span>
    <span className="value">Total: {countTotalFeedback}</span>
    <span>Positive Feedback: {positiveFeedBack} %</span>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedBack: PropTypes.number.isRequired,
};

export default Statistics;
