import React, { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Sidebar = lazy(() => import("./components/Sidebar"));
const Wrapper = lazy(() => import("./components/Wrapper"));
const Contact = lazy(() => import("./screens/Contact"));
const Projects = lazy(() => import("./screens/Projects"));
const About = lazy(() => import("./screens/About"));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Wrapper />
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <About />
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
    </Suspense>
  );
}

export default App;
