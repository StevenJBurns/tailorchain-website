/* React, Redux and Router Imports */ 
import React from "react";
import { Link } from "react-router-dom";

/* external dependencies */
import Button from "@material-ui/core/Button";


const AppNav = (props) => {
  return (
    <nav>
      <Button component={Link} to="/">HOME</Button>
      <Button component={Link} to="/services">SERVICES</Button>
      <Button component={Link} to="/contact">CONTACT</Button>
      <Button component={Link} to="/about">ABOUT</Button>
      <Button component={Link} to="/dashboard">DASHBOARD</Button>
      <Button component={Link} to="/admin">ADMIN</Button>
    </nav>
  );
};

export default AppNav;