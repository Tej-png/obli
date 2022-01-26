import React, { useState, useEffect } from "react";
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth, window.innerHeight]);


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home width={width}/>}></Route>
        <Route path='/artworks' element={<Gallery width={width}></Gallery>}></Route>
        <Route path='/contact' element={<Contact width={width}/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
