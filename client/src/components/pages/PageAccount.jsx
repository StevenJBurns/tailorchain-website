/* React Dependencies */
import React from "react";

/* External Dependencies */
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

/* Local Dependencies */
import TabLogin from "./TabLogin.jsx";
import TabRegister from "./TabRegister.jsx";
import TabPassword from "./TabPassword.jsx";
import "./Pages.css";


function TabContainer(props) {
  return (<div>{props.children}</div>);
};

class PageAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      currentTab: 0
    }
  }

  handleTabChange = (e, tab) => this.setState({ currentTab: tab });

  render() {
    const { currentTab } = this.state;

    return (
      <React.Fragment>
        <Tabs value={currentTab} onChange={this.handleTabChange}>
          <Tab label="LOGIN" />
          <Tab label="REGISTER" />
          <Tab label="PASSWORD" />
        </Tabs>
        {currentTab === 0 && <TabContainer><TabLogin /></TabContainer>}
        {currentTab === 1 && <TabContainer><TabRegister /></TabContainer>}
        {currentTab === 2 && <TabContainer><TabPassword /></TabContainer>}
      </React.Fragment>
    );
  };
};

export default PageAccount;