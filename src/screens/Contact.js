import React from "react";
import "./Screen.css";

import githubIcon from "../images/github.svg";

export default function Contact() {
  return (
    <div className="bodyScreen">
      <h1 className="headerScreen">CONTACT</h1>

      <div className="sectionSreen">
        <div className="bodySectionScreen">
          {/* Mes liens*/}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="btn btn-two">
              <img
                src={githubIcon}
                alt="github-icon"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  fill: "red",
                  zIndex: 1000,
                }}
              />
              <span>GITHUB</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "150px" }}>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
