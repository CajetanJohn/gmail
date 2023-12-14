import React from 'react';
import ReactDOM from 'react-dom/client';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/' element={<LoadingComponent/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
