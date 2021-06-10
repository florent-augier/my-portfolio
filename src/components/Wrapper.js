import React, { lazy, Suspense } from "react";
import { Router, useHistory } from "react-router-dom";
import "./Wrapper.css";

const Navbar = lazy(() => import("./Navbar"));

export default function Wrapper() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Suspense fallback={<div>Chargement...</div>}>
        <Navbar />
      </Suspense>
    </Router>
  );
}
