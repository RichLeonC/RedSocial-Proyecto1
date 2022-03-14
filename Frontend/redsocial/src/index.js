import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';


import Routes from './Routes/Routes.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  //<React.StrictMode>
  //  <Routes />
  //</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
