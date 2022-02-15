import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import About from './components/About';
import Writing from './components/Writing';
import {BrowserRouter as Router, Route, Routes,  Switch, Link } from "react-router-dom";
import MinorityBlueprint from './post/MinorityBlueprint';

function App() {
  return (
    <Router>
      {/* <About/> */}
      {/* <Writing/>  */}
      <Routes>
        <Route path="/components/About" element={<About/>} />
        <Route path="/components/Writing" element={<Writing/>} />
        <Route path="/post/MinorityBlueprint" element={<MinorityBlueprint/>}/>
      </Routes>
    </Router>
  );
}

export default App;
