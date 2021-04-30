import React, { useEffect } from "react";
import { Router, useHistory } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  let history = useHistory();

  useEffect(() => {
    console.log(history);
  });

  const goToAbout = (e) => {
    e.preventDefault();
    history.push("/about");
  };

  const goToProjects = (e) => {
    e.preventDefault();

    history.push("/projects");
  };
  const goToContact = (e) => {
    e.preventDefault();

    history.push("/contact");
  };

  return (
    <Router history={history}>
      <nav>
        <ul>
          <li onClick={(e) => goToAbout(e)}>
            A propos
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>

          <li onClick={(e) => goToProjects(e)}>
            Mes projets
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li onClick={(e) => goToContact(e)}>
            Me contacter
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </nav>
    </Router>
  );
}
