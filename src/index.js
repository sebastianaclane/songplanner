import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('#main')
);