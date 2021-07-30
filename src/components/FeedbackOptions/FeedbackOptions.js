import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="buttons">
    {options.map(option => (
      <button
        className="button"
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
FeedbackOptions.prototype = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
