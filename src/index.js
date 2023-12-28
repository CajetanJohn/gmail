import React from 'react';
import { createRoot } from 'react-dom';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './Utils/Data/DataFetch';
import { Provider } from 'react-redux';
import OpenMail from './Components/Sections/OpenMail';
import SideNav from './Components/Navigation/SideNav/SideNav';
import TopNav from './Components/Navigation/TopNav/TopNav';
import "./Assets/Style/Global.css"

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/home/*' element={<Homepage />} />
          <Route path='/' element={<LoadingComponent />} />
          <Route path='/email/:id' element={<OpenMail/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
  
);
