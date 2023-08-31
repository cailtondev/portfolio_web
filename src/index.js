import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './vendors/bootstrap.scss';
import './scss/app.scss';
import './js/bootstrap-min';

import Navbar from './components/Navbar';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';

// const root = document.getElementById('root');
const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <footer>{/* Coloque seu footer aqui */}</footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
