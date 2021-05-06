import React, { useEffect, useRef, useState } from "react";
import "./Screen.css";

import forky from "./../images/forky.png";
import forkyPhone from "./../images/forky-phone.jpg";

export default function Projects() {
  const forkyRef = useRef(null);
  const forkyPhoneRef = useRef(null);

  const [forkyIsTouched, setForkyIsTouched] = useState(false);
  const [forkyPhoneIsTouched, setForkyPhoneIsTouched] = useState(false);

  const touchCard = (e, ref) => {
    console.log(e.target.tagName);
    if (
      e.type === "touchmove" &&
      ref === forkyRef &&
      e.target.tagName === "IMG"
    ) {
      console.log("hello je bouge");
      setForkyIsTouched(!forkyIsTouched);
    } else if (
      e.type === "touchmove" &&
      ref === forkyPhoneRef &&
      e.target.tagName === "IMG"
    ) {
      console.log("hello je bouge aussi");
      setForkyPhoneIsTouched(!forkyPhoneIsTouched);
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

        <a
          href="https://forky-app.herokuapp.com/"
          onTouchMove={(e) => touchCard(e, forkyRef)}
          onMouseEnter={() => hoverCard(forkyRef)}
          onMouseLeave={() => hoverCard(forkyRef)}
        >
          <div className="bodySectionScreen">
            <div className="wrapperCard">
              <div className="card">
                <div className="image">
                  <img src={forky} alt="forky" />
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
