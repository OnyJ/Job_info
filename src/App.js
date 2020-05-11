import React from "react";
import "./App.css";
// Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Job from "./pages/Job";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
