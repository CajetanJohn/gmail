import React from 'react';
import { createRoot } from 'react-dom';
import LoadingComponent from './Pages/Loading';
import {OpenMailWrapper, Homepage} from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/' element={<LoadingComponent />} />
        <Route path="/hemail/:id" element={<OpenMailWrapper />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
