import React from 'react';
import spinner from '../spinner.svg';
import './Loading.css';

const Loading = () => (
  <div className="Loading-main">
    <img src={spinner} className="Loading-spinner" alt="spinner" />
    <p>Loading...</p>
  </div>
);

export default Loading;
