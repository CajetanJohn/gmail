import React from 'react';
import ReactDOM from 'react-dom';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<LoadingComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
