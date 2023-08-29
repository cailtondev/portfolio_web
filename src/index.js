import React from 'react';
import ReactDOM from 'react-dom/client';

// All import bootstrap sass and javascript
import './styles/bootstrap-min.css';
import './styles/style-min.css';

import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
