import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reserva from "./components/Reserva";
import { ParallaxProvider, Parallax } from 'react-skrollr'

function App() {
  return (
    <ParallaxProvider init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/Home" component={Home} exact />
            <Route path="/Menu" component={Menu} />
            <Route path="/Reserva" component={Reserva} />
          </Switch>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
      
  );
}

export default App;
