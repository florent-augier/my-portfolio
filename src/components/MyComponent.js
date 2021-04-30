import React, { useRef, useState } from "react";
import "./MyComponent.css";

import { gsap, TweenLite } from "gsap/all";

gsap.registerPlugin(TweenLite);

export default function MyComponent() {
  const [plusOrMinus, setPlusOrMinus] = useState(false);

  let nodeRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  let animationRef = useRef(null);

  const handleClickDiv = () => {
    if (plusOrMinus) {
      TweenLite.to(nodeRef, 3, { x: 100, y: 100 });

      TweenLite.to(nodeRef, 2, { x: 0, y: 0, delay: 2 });
    } else {
      TweenLite.to(nodeRef, 2, { x: -25, y: -25 });
    }
    setPlusOrMinus(!plusOrMinus);
  };

  // eslint-disable-next-line no-const-assign
  return (
    <div className="wrapperDiv">
      <div
        ref={(div) => (nodeRef = div)}
        style={{ height: "150px", backgroundColor: "yellow", width: "80%" }}
        onClick={() => handleClickDiv()}
      />
    </div>
  );
}
