import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './App';

const parrentElement = document.getElementById('root')

const root = ReactDOM.createRoot(parrentElement);


root.render(<App />);