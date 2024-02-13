import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Candy from './components/Candy';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="soda" element={<Soda />} />
        <Route path="chips" element={<Chips />} />
        <Route path="candy" element={<Candy />} />
      </Routes>
    </div>
  );
}

export default App;
