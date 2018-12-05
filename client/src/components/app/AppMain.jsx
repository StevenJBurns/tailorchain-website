/* React, Redux and Router Imports */ 
import React from "react";
import { Switch, Route } from "react-router";

/* Local Dependencies */
import PageHome from "../pages/PageHome.jsx";
import PageServices from "../pages/PageServices.jsx";
import PageContact from "../pages/PageContact.jsx";
import PageAbout from "../pages/PageAbout.jsx";
import PageDashboard from "../pages/PageDashboard.jsx";
import PageAdmin from "../pages/PageAdmin.jsx"; 
import "./App.css";


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
    </main>
  );
};

export default AppMain;
