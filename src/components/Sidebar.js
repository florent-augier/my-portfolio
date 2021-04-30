import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="wrapperSidebar">
      <div className="buttonSidebar">
        <p>MON PARCOURS</p>
        <div className="corner">
          <div className="arrow"></div>
        </div>
      </div>
      <div className="buttonSidebar">
        <p>MES PROJETS</p>
        <div className="corner"></div>
      </div>
      <div className="buttonSidebar">
        <p>ME CONTACTER</p>
        <div className="corner"></div>
      </div>
    </div>
  );
}
