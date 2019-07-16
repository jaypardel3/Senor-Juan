import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reserva from "./components/Reserva";

function App() {
  return (
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
  );
}

export default App;
