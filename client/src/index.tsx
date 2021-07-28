import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
