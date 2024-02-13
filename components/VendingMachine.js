import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachineImage from '../assets/images/vending-machine.jpg';

function VendingMachine() {
  return (
    <div className="vending-machine">
       <img src={vendingMachineImage} alt="Vending Machine" />
      <div className="snack-options">
        <Link to="/soda"><button className="snack-button">Soda</button></Link>
        <Link to="/chips"><button className="snack-button">Chips</button></Link>
        <Link to="/candy"><button className="snack-button">Candy</button></Link>
      </div>
    </div>
  );
}

export default VendingMachine;
