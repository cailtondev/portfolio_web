import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/scss/app.scss';

// All import bootstrap sass and javascript
import './vendors/bootstrap.scss';
import './js/bootstrap-min';

import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
