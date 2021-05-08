import React, { useEffect, useRef, useState } from "react";
import "./Screen.css";

import useWindowSize from "../helpers/WindowSize";

import forky from "./../images/forky.png";
import forkyPhone from "./../images/forky-phone.jpg";

import "@lottiefiles/lottie-player";

export default function Projects() {
  const [width] = useWindowSize();

  const forkyRef = useRef(null);
  const forkyPhoneRef = useRef(null);

  const [forkyIsTouched, setForkyIsTouched] = useState(false);
  const [forkyPhoneIsTouched, setForkyPhoneIsTouched] = useState(false);

  const [forkySwipeIsVisible, setForkySwipeIsVisible] = useState(false);
  const [forkyPhoneSwipeIsVisible, setForkyPhoneSwipeIsVisible] = useState(
    false
  );

  const touchCard = (e, ref) => {
    if (
      e.type === "touchmove" &&
      ref === forkyRef &&
      (e.target.tagName === "IMG" || e.target.tagName === "LOTTIE-PLAYER")
    ) {
      setForkyIsTouched(!forkyIsTouched);
      setForkySwipeIsVisible(!forkySwipeIsVisible);
    } else if (
      e.type === "touchmove" &&
      ref === forkyPhoneRef &&
      e.target.tagName === "IMG"
    ) {
      setForkyPhoneIsTouched(!forkyPhoneIsTouched);
      setForkyPhoneSwipeIsVisible(!forkyPhoneSwipeIsVisible);
    }
  };

  const hoverCard = (ref) => {
    if (ref === forkyRef) {
      setForkyIsTouched(!forkyIsTouched);
    } else if (ref === forkyPhoneRef) {
      setForkyPhoneIsTouched(!forkyPhoneIsTouched);
    }
  };

  useEffect(() => {
    if (forkyIsTouched) {
      forkyRef.current.style.transform = "rotateY(0deg)";
    } else {
      forkyRef.current.style.transform = "rotateY(90deg)";
    }
  }, [forkyIsTouched]);

  useEffect(() => {
    if (forkyPhoneIsTouched) {
      forkyPhoneRef.current.style.transform = "rotateY(0deg)";
    } else {
      forkyPhoneRef.current.style.transform = "rotateY(90deg)";
    }
  }, [forkyPhoneIsTouched]);

  return (
    <div className="bodyScreen">
      <h1 className="headerScreen">MES PROJETS</h1>

      {/* Forky web */}
      <div className="sectionScreen">
        <div className="headerSectionScreen">
          <h2>Forky</h2>
        </div>

        {width <= 480 && (
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Toucher l'image pour accéder au lien ou swiper comme le montre
            l'animation pour afficher les informations
          </p>
        )}

        <a
          href="https://forky-app.herokuapp.com/"
          onTouchMove={(e) => touchCard(e, forkyRef)}
          onMouseEnter={() => hoverCard(forkyRef)}
          onMouseLeave={() => hoverCard(forkyRef)}
        >
          <div className="bodySectionScreen">
            <div className="wrapperCard">
              {width <= 480 && !forkySwipeIsVisible && (
                <div
                  className="swiper"
                  style={{ position: "absolute", zIndex: "5" }}
                >
                  <lottie-player
                    src="https://assets1.lottiefiles.com/datafiles/8rPPZlJdGjchPU2/data.json"
                    style={{
                      background: "transparent",
                      float: "left",
                      left: "50%",
                      maxWidth: width >= 480 ? "300px" : "150px",
                      maxHeight: width >= 480 ? "120px" : "60px",
                    }}
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              )}

              <div className="card">
                <div className="image">
                  <img src={forky} alt="forky"></img>
                </div>

                <div className="details" ref={forkyRef}>
                  <div className="details-text">
                    <h3>C'est quoi ? </h3>

                    <p>
                      Application web permettant de mettre en relation des
                      professionels pour déjeuner ensemble
                    </p>
                    <h3>Backend: </h3>
                    <p>Express connecté à MongoDB</p>
                    <h3>Frontend: </h3>
                    <p>React qui appelle le Backend</p>
                    <h3>Stratégie</h3>
                    <p>Application hybride: React encapsulée dans Express</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Forky phone App */}

      <div className="sectionScreen">
        <div className="headerSectionScreen">
          <h2>Forky Mobile version</h2>
        </div>

        <a
          href="https://expo.io/@flowww13/projects/forky"
          onTouchMove={(e) => touchCard(e, forkyPhoneRef)}
          onMouseEnter={() => hoverCard(forkyPhoneRef)}
          onMouseLeave={() => hoverCard(forkyPhoneRef)}
        >
          <div className="bodySectionScreen">
            <div className="wrapperCard">
              {width <= 480 && !forkyPhoneIsTouched && (
                <div
                  className="swiper"
                  style={{ position: "absolute", zIndex: "5" }}
                >
                  <lottie-player
                    src="https://assets1.lottiefiles.com/datafiles/8rPPZlJdGjchPU2/data.json"
                    style={{
                      background: "transparent",
                      float: "left",
                      left: "50%",
                      top: "50%",
                      maxWidth: width >= 480 ? "300px" : "150px",
                      maxHeight: width >= 480 ? "120px" : "60px",
                    }}
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              )}

              <div className="card">
                <div className="image">
                  <img src={forkyPhone} alt="forky-phone" />
                </div>
                <div className="details" ref={forkyPhoneRef}>
                  <div className="details-text">
                    <h3>C'est quoi ? </h3>

                    <p>
                      Application mobile permettant de mettre en relation des
                      professionels pour déjeuner ensemble
                    </p>
                    <h3>Backend: </h3>
                    <p>Express connecté à MongoDB</p>
                    <h3>Frontend: </h3>
                    <p>
                      React Native initialisé avec Expo qui appelle le Backend
                    </p>
                    <h3>Stratégie</h3>
                    <p>Appel à l'API (backend)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
