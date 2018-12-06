/* React, Redux and Router Imports */ 
import React from "react";

/* External Dependencies */
import Button from "@material-ui/core/Button";


const AppHeader = (props) => {
  return (
    <header>
      <h1>TailorChain</h1>
      <Button>LOGIN</Button>
      <Button>LOG OUT</Button>
    </header>
  );
};

export default AppHeader;