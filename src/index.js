import React from 'react';
import ReactDOM from 'react-dom/client';
import LoadingComponent from './Pages/Loading';
import Homepage from './Pages/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LoadingComponent/>
   {/*< Homepage/>*/}
  </React.StrictMode>
);
