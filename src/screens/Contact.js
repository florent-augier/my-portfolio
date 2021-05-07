import React, { useRef } from "react";
import "./Screen.css";

import githubIcon from "../images/github.svg";

export default function Contact() {
  const githubText = useRef(null);

  const jumpLetters = (e) => {
    if (e.type === "mouseenter") {
      githubText.current.style.transition = "all 1s";
      githubText.current.style.marginTop = "60%";
    } else if (e.type === "mouseleave") {
      githubText.current.style.marginTop = "0%";
    }
  };

  return (
    <div className="bodyScreen">
      <h1 className="headerScreen">CONTACT</h1>

      <div className="sectionSreen">
        <div className="bodySectionScreen">
          {/* Mes liens*/}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://github.com/florent-augier">
              <div
                className="btn btn-two"
                onMouseEnter={(e) => jumpLetters(e)}
                onMouseLeave={(e) => jumpLetters(e)}
              >
                <img
                  src={githubIcon}
                  alt="github-icon"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    zIndex: 1000,
                  }}
                />
                <span ref={githubText}>GITHUB</span>
              </div>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "200px",
            }}
          >
            Mail:
            <p style={{ marginTop: "50px" }}>florent.sauvetage@gmail.com</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "200px",
            }}
          >
            Téléphone:
            <p style={{ marginTop: "50px" }}>06.64.16.21.04</p>
          </div>
        </div>
      </div>
    </div>
  );
}
