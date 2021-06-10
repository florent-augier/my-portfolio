import React from "react";
import { Router, useHistory } from "react-router-dom";
import "./Navbar.css";

import logo from "./../images/flowww.svg";

import useWindowSize from "./../helpers/WindowSize";

export default function Navbar() {
  const [width] = useWindowSize();
  let history = useHistory();

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
          {width >= 900 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                width: "200px",
              }}
            >
              <img
                src={logo}
                alt="Logo Florent Augier Développeur web et mobile"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          <li onClick={(e) => goToAbout(e)}>
            Mon parcours
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
