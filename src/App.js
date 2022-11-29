import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import "./App.css";
import "./Styles/Navbar.css";
import "./Styles/Home.css"
import "./Styles/Footer.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/portfolio" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App