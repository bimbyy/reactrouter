// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'; // Assuming you'll create a CSS file for styling

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
      <NavLink to="/soda" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Soda</NavLink>
      <NavLink to="/chips" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Chips</NavLink>
      <NavLink to="/candy" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Candy</NavLink>
    </nav>
  );
}

export default NavigationBar;
