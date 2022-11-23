import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App from './App';
import Footer from './components/Footer';
import './css/style.css';
import './css/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);