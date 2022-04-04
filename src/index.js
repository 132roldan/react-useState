import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Info from './components/Info'
import Footer from './components/Footer'
import About from './pages/About';
import "./styles.css/style.css"

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";



ReactDOM.render(
  
   
    <Router>

    <Header />


    <Routes>
      <Route path="/" exact element={<Info />} />
      <Route path="/about" element={<About />} />
      

    </Routes>

    <Footer />
  </Router >,
  document.getElementById('root')
);


