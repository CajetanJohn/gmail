import React from 'react';
import { createRoot } from 'react-dom';
import LoadingComponent from './Pages/Loading';
import {EmailList, Homepage} from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home/*' element={<Homepage />} />
        <Route path='/' element={<LoadingComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
