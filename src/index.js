import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RoomProvider} from './context'
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <RoomProvider>
  <Router>
    <App />
  </Router>
  </RoomProvider>,
  document.getElementById('root')
);


reportWebVitals();
