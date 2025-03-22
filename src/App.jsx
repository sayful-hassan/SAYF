import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import './App.css';
import NewArrivals from './pages/NewArrivals';
import Men from './pages/Men';
import Women from './pages/Women';
import Sales from './pages/Sales';
import Kids from './pages/Kids';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewArrivals />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/kids' elements={<Kids/>} />
      </Routes>
    </Router>
  );
}

export default App;