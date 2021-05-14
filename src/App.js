import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";
import About from "./screens/About";

function FourOhFour() {
  return (
    <div>
      <h1>Page non trouvée</h1>
      <Link to="/">Revenir à l'accueil</Link>
    </div>
  );
}

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
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
