import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterBase from './router/RouterBase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterBase />
  </React.StrictMode>
);

