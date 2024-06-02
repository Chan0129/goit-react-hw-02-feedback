import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.protoType = {
  message: PropTypes.string.isRequired,
};
