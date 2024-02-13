import React from 'react';
import { Link } from 'react-router-dom';
import './SnackStyles.css';

function Chips() {
  return (
    <div className="snack-background-chips">
      <h1>Chips!</h1>
      <p>Salty and crunchy</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Chips;
