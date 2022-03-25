import React from 'react';

const Alert = ({ text }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
};

export default Alert;
