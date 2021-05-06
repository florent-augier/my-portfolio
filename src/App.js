import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Wrapper />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
