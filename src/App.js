import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // ✅ import Home page
import Contact from './components/Contact';
import './App.scss';
import Footer from './components/footer';
import Aboutus from './About/Aboutus';
import OurCustomer from './components/OurCustomer';
import Contract from './components/Contract';
import Product from './components/Product';
import Partners from './components/partners';
import CoreValuesPage from './Pages/CoreValuesPage';
import Responsibilty from './Pages/Responsibilty';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ linked Home.js */}
     
        <Route path="/OurCustomer" element={<OurCustomer />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/coreValuesPage" element={<CoreValuesPage />} />
        <Route path="/responsibilty" element={<Responsibilty />} />

        
        <Route path="/Contract" element={<Contract />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/partners" element={<Partners />} />
       
      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
