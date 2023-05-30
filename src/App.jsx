import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
  return (
    <router>
      <header>
        <h1>#VanLife</h1>
        <nav>
          <p>about</p>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Home /> */}
    </router>
    // <BrowserRouter>
    // </BrowserRouter>
  )
}

export default App

{/* <Link className="site-logo" to="/">#VanLife</Link> */ }
{/* <Link to="/about">About</Link> */ }