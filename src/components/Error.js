import React from 'react';
import './Error.css';

const Error = () => {
  const message = 'Looks like there was a problem.';

  return (
    <div className="Error-main">
      <p>{message}</p>
    </div>
  );
};

export default Error;
