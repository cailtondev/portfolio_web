import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './vendors/bootstrap.scss';
import './scss/app.scss';
import './js/bootstrap-min';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TopButton from './components/TopButton';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header className="navbar">
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <TopButton />
        <footer>{/* Coloque seu footer aqui */}</footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
