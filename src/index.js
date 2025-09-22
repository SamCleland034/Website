import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root'); // assuming 'root' is the ID of your root element in index.html
const root = createRoot(container);
root.render(<BrowserRouter>
  <App />
</BrowserRouter>);