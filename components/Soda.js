import React from 'react';
import { Link } from 'react-router-dom';
import './SnackStyles.css';

function Soda() {
  return (
    <div className="snack-background-soda">
      <h1>Soda!</h1>
      <p>Refreshing and fizzy</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Soda;
