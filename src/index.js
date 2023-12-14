import React from 'react';
import ReactDOM from 'react-dom';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
>>>>>>> 7ac6abb70e1bd20451575257504ff658fc417ae7

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/' element={<LoadingComponent/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
=======
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<LoadingComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 7ac6abb70e1bd20451575257504ff658fc417ae7
);
