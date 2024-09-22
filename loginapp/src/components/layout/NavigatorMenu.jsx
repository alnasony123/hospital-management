import React, { Component } from "react";
import logo from "../../images/logo.png";

class NavigatorMenu extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <img src={logo} width="30" height="30" alt="y?" />
          <h3>New Life Hospital</h3>
        </nav>
      </div>
    );
  }
}

export default NavigatorMenu;
