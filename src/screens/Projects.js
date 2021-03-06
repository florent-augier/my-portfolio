import React, { useEffect, useRef, useState } from "react";
import "./Screen.css";

import useWindowSize from "../helpers/WindowSize";

import forky from "./../images/forky.png";
import forkyPhone from "./../images/forky-phone.jpg";
import leGold from "./../images/le-gold.png";

import githubIcon from "../images/github.svg";

import "@lottiefiles/lottie-player";

export default function Projects() {
  const githubText = useRef(null);

  const jumpLetters = (e) => {
    if (e.type === "mouseenter") {
      githubText.current.style.transition = "all 1s";
      githubText.current.style.marginTop = "60%";
    } else if (e.type === "mouseleave") {
      githubText.current.style.marginTop = "0%";
    }
  };

  const [width] = useWindowSize();

  const forkyRef = useRef(null);
  const forkyPhoneRef = useRef(null);
  const leGoldRef = useRef(null);

  const [forkyIsTouched, setForkyIsTouched] = useState(false);
  const [forkyPhoneIsTouched, setForkyPhoneIsTouched] = useState(false);
  const [leGoldIsTouched, setLeGoldIsTouched] = useState(false);

  const [forkySwipeIsVisible, setForkySwipeIsVisible] = useState(false);
  const [forkyPhoneSwipeIsVisible, setForkyPhoneSwipeIsVisible] =
    useState(false);
  const [leGoldSwipeIsVisible, setLeGoldSwipeIsVisible] = useState(false);

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
    } else if (
      e.type === "touchmove" &&
      ref === leGoldRef &&
      e.target.tagName === "IMG"
    ) {
      setLeGoldIsTouched(!leGoldIsTouched);
      setLeGoldSwipeIsVisible(!leGoldSwipeIsVisible);
    }
  };

  const hoverCard = (ref) => {
    if (ref === forkyRef) {
      setForkyIsTouched(!forkyIsTouched);
    } else if (ref === forkyPhoneRef) {
      setForkyPhoneIsTouched(!forkyPhoneIsTouched);
    } else if (ref === leGoldRef) {
      setLeGoldIsTouched(!leGoldIsTouched);
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

  useEffect(() => {
    if (leGoldIsTouched) {
      leGoldRef.current.style.transform = "rotateY(0deg)";
    } else {
      leGoldRef.current.style.transform = "rotateY(90deg)";
    }
  }, [leGoldIsTouched]);

  return (
    <div className="bodyScreen">
      <h1 className="headerScreen">MES PROJETS</h1>

      {/*GITHUB LINK */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "200px",
        }}
      >
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

      {/* Forky web */}
      <div className="sectionScreen">
        <div className="headerSectionScreen">
          <h2>Forky</h2>
        </div>

        {width <= 480 && (
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Toucher l'image pour acc??der au lien ou swiper comme le montre
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
                      professionels pour d??jeuner ensemble
                    </p>
                    <h3>Backend: </h3>
                    <p>Express connect?? ?? MongoDB</p>
                    <h3>Frontend: </h3>
                    <p>React qui appelle le Backend</p>
                    <h3>Strat??gie</h3>
                    <p>Application hybride: React encapsul??e dans Express</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Mobilhome */}

      <div className="sectionScreen">
        <div className="headerSectionScreen">
          <h2>Mobilhome Le Gold</h2>
        </div>

        {width <= 480 && (
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Toucher l'image pour acc??der au lien ou swiper comme le montre
            l'animation pour afficher les informations
          </p>
        )}

        <a
          href="https://mobilhome-le-gold.vercel.app"
          onTouchMove={(e) => touchCard(e, leGoldRef)}
          onMouseEnter={() => hoverCard(leGoldRef)}
          onMouseLeave={() => hoverCard(leGoldRef)}
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
                  <img src={leGold} alt="forky"></img>
                </div>

                <div className="details" ref={leGoldRef}>
                  <div className="details-text">
                    <h3>C'est quoi ? </h3>

                    <p>
                      Site web statique de pr??sentation d'un mobilhome situ?? ??
                      Crots and les Hautes-Alpes.
                    </p>
                    <h3>Backend: </h3>
                    <p>Pas de Back</p>
                    <h3>Frontend: </h3>
                    <p>NextJs</p>
                    <h3>Strat??gie</h3>
                    <p>Aucune</p>
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
                      professionels pour d??jeuner ensemble
                    </p>
                    <h3>Backend: </h3>
                    <p>Express connect?? ?? MongoDB</p>
                    <h3>Frontend: </h3>
                    <p>
                      React Native initialis?? avec Expo qui appelle le Backend
                    </p>
                    <h3>Strat??gie</h3>
                    <p>Appel ?? l'API (backend)</p>
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
