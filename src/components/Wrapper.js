import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Wrapper.css";

import { Router, useHistory, useLocation } from "react-router-dom";

export default function Wrapper() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });
  let history = useHistory();
  return (
    <Router history={history}>
      <Navbar />
    </Router>
  );
}
