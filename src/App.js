import 'antd/dist/reset.css';


import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // ✅ import Home page
import Contact from './components/Contact';
import './App.scss';
import Footer from './components/footer';
import Aboutus from './About/Aboutus';
import OurCustomer from './components/OurCustomer';

import Product from './components/Product';
import Partners from './components/partners';

import BackButton from './BackButton';
import  ErrorPage from './ErrorPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<div className="page-animation"><Home /></div>} />
  <Route path="/OurCustomer" element={<div className="page-animation"><OurCustomer /></div>} />
  <Route path="/contact" element={<div className="page-animation"><Contact /></div>} />
  <Route path="/aboutus" element={<div className="page-animation"><Aboutus /></div>} />


  <Route path="/Product" element={<div className="page-animation"><Product /></div>} />
  <Route path="/partners" element={<div className="page-animation"><Partners /></div>} />
  <Route path="*" element={<div className="page-animation"><ErrorPage /></div>} />
</Routes>

      <BackButton />
      <Footer/>
    </>
  );
}

export default App;
