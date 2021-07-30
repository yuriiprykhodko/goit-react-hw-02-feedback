import React from 'react';
import './Notification.css';
import PropTypes from 'prop-types';
const Notification = ({ children, message }) => (
  <>
    <h2 className="message">{message}</h2>
    <>{children}</>
  </>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
