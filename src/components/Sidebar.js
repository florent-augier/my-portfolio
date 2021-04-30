import React from "react";
import "./Sidebar.css";

import { useHistory } from "react-router-dom";

export default function Sidebar() {
  let history = useHistory();

  const goToAbout = () => {
    history.push("/about");
    window.scrollTo(0, 0);
  };
  const goToContact = () => {
    history.push("/contact");
    window.scrollTo(0, 0);
  };
  const goToProjects = () => {
    history.push("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <div className="wrapperSidebar">
      <div className="buttonSidebar" onClick={() => goToAbout()}>
        <p>MON PARCOURS</p>
        <div className="corner">
          <div className="arrow"></div>
        </div>
      </div>
      <div className="buttonSidebar" onClick={() => goToProjects()}>
        <p>MES PROJETS</p>
        <div className="corner"></div>
      </div>
      <div className="buttonSidebar" onClick={() => goToContact()}>
        <p>ME CONTACTER</p>
        <div className="corner"></div>
      </div>
    </div>
  );
}
