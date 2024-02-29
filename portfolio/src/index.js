import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="amthal" element={<Amthal />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);


