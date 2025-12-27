import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/App.css';

import App from './App';
import Header from 'components/navigations/Header';
import Footer from 'components/navigations/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Header/>
    <App />
    <Footer/>
  </BrowserRouter>,
);
