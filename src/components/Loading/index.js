import React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles.css';

const Loading = () => (
  <div className="Loading-main">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
