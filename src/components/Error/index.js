import React from 'react';
import { FaSkullCrossbones } from 'react-icons/fa';
import './styles.css';

/**
 * Component for display the error message
 *
 * @returns {Error} - The react component
 */
export default function Error() {
  const message = 'Looks like there was a problem.';

  return (
    <div className="Error-main">
      <p className="Error-icon">
        <FaSkullCrossbones />
      </p>
      <p>{message}</p>
    </div>
  );
}
