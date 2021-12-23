import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animate from 'react-smooth';
import Particles from 'react-particles-js';

import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import particles from "./components/particle2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";


import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return(
  <Router>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Animate>
    </div>
  </Router>
  );
}

export default App;
