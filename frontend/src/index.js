import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.pathname;
root.render(
  <React.StrictMode>
    {path === '/helloworld' ? <HelloWorld /> : <App />}
  </React.StrictMode>
);
