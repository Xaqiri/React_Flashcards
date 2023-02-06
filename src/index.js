import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './Nav';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
