/* React, Redux and Router Imports */ 
import React from "react";
import { Switch, Route } from "react-router";

/* External Dependencies */
import Particles from 'react-particles-js';

/* Local Dependencies */
import PageHome from "../pages/PageHome.jsx";
import PageServices from "../pages/PageServices.jsx";
import PageContact from "../pages/PageContact.jsx";
import PageAbout from "../pages/PageAbout.jsx";
import PageDashboard from "../pages/PageDashboard.jsx";
import PageAdmin from "../pages/PageAdmin.jsx"; 
import "./App.css";


const particlesParams = {
  "particles": {
    "number": {
      "value": 48
    },
    "size": {
      "value": 4
    },
    "color": {
      "value": "#4682B4"
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#4682B4",
      "opacity": 0.25,
      "width": 1
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

const AppMain = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/services" component={PageServices} />
        <Route path="/contact" component={PageContact} />
        <Route path="/about" component={PageAbout} />
        <Route path="/dashboard" component={PageDashboard} />
        <Route path="/admin" component={PageAdmin} />
      </Switch>
      <Particles params={particlesParams} style={{width: '100%'}} />
    </main>
  );
};

export default AppMain;
