import React from 'react';
import './styles.css';
import Icon from '../Icon';

const Error = () => {
  const message = 'Looks like there was a problem.';

  return (
    <div className="Error-main">
      <p className="Error-icon">
        <Icon name="alert" />
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
