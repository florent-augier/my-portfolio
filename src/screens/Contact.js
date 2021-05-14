import React, { useEffect, useRef, useState } from "react";
import "./Screen.css";

import Icon from "@mdi/react";
import { mdiContentCopy, mdiPhone } from "@mdi/js";

export default function Contact() {
  const emailButton = useRef(null);

  const [isCLiked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isCLiked) {
      emailButton.current.classList.add("clicked");
      setTimeout(() => {
        emailButton.current.classList.remove("clicked");
        setIsClicked(false);
      }, 2000);
    }
  }, [isCLiked]);

  const handleClickEmail = (e) => {
    navigator.clipboard.writeText(e.currentTarget.textContent);
    setIsClicked(true);
  };

  return (
    <div className="bodyScreen">
      <h1 className="headerScreen">CONTACT</h1>

      <div className="sectionSreen">
        <div className="bodySectionScreen">
          {/* Mes liens*/}

          <div className="emailAndTel">
            <p className="pContact">Mail:</p>
            <div className="infoContact">
              <input
                className="inputContact"
                readOnly
                defaultValue="florent.sauvetage@gmail.com"
              ></input>
              <button
                ref={emailButton}
                className="buttonContact"
                onClick={(e) => handleClickEmail(e)}
              >
                <Icon
                  path={mdiContentCopy}
                  title="florent.sauvetage@gmail.com"
                  size={1}
                  horizontal
                  vertical
                />
              </button>
            </div>
          </div>
          <div className="emailAndTel">
            <p className="pContact">Téléphone:</p>

            <div className="infoContact">
              <input
                readOnly
                className="inputContact"
                defaultValue="06 64 16 21 04"
              ></input>

              <button className="buttonContact">
                <a href="tel:+33664162104">
                  <Icon
                    path={mdiPhone}
                    title="Appeler le 06 64 16 21 04"
                    size={1}
                    horizontal
                    vertical
                    color="var(--pink)"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
