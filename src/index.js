import React from 'react';
import ReactDOM from 'react-dom';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/' element={<LoadingComponent />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
