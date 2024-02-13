import React from 'react';
import { Link } from 'react-router-dom';
import './SnackStyles.css';

function Candy() {
  return (
    <div className="snack-background-candy">
      <h2>Candy </h2>
      <p>Want something sweet? Try some Candy</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Candy;