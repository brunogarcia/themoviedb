import React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles.css';

/**
 * Component for display the loading of the app
 *
 * @returns {Loading} - The react component
 */
export default function Loading() {
  return (
    <div className="Loading-main">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
