import React from 'react';
import spinner from '../../assets/spinner.svg';
import './styles.css';

const Loading = () => (
  <div className="Loading-main">
    <img src={spinner} className="Loading-spinner" alt="spinner" />
    <p>Loading...</p>
  </div>
);

export default Loading;
