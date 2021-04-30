import React from "react";
import Navbar from "../components/Navbar";
import "./Wrapper.css";

import { Router, useHistory } from "react-router-dom";

export default function Wrapper() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Navbar />
    </Router>
  );
}
