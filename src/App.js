import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
    </HashRouter>
  );
}

export default App;