import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="wrapperFooter">
      <div className="gridFooter">
        <div className="gridItem">
          <div>
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
        <div className="gridItem">@ Florent Augier 2021</div>
        <div className="gridItem">
          Remerciements:
          <ul>
            <li>
              <a
                href="https://www.lacapsule.academy/"
                style={{ color: "var(--blue)" }}
              >
                @La Capsule
              </a>
            </li>
            <li>
              <a
                href="https://www.thehackingproject.org/"
                style={{ color: "var(--blue)" }}
              >
                The Hacking Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
