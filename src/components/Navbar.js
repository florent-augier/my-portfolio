import React from "react";
import { Router, useHistory } from "react-router-dom";
import "./Navbar.css";

import Video from "./../videos/florentaugier.mp4";

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
          {width >= 650 && (
            <video
              src={Video}
              autoPlay
              height={width >= 600 ? 125 : 40}
              width={width >= 600 ? 250 : 85}
              pl
            />
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
