import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="wrapperFooter">
      <div className="gridFooter">
        <div className="firstCol">
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
        <div className="secondCol"></div>
        <div className="thirdCol"></div>
      </div>
    </div>
  );
}
