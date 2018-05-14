import React from 'react';
import spinner from '../spinner.svg';
import './Loading.css';

function Loading () {
  const message = 'Loading...';

  return (
    <div className="Loading-main">
      <img src={spinner} className="Loading-spinner" alt="spinner" />
      <p>{message}</p>
    </div>
  );
}

export default Loading;
