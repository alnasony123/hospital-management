import React, { Component } from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login.jsx";
import Reg from "./components/register/Reg.jsx";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer.jsx";
import Feed from "./components/profile/Feed.jsx";
import admin from "./components/adminModule/admin.jsx";
import viewPatient from "./components/adminModule/viewPatient.jsx";
import addPatient from "./components/adminModule/addPatient.jsx";
import choosingOption from "./components/adminModule/choosingOption.jsx";
import viewAppoin from "./components/adminModule/viewAppoin.jsx";
import Appoinment from "./components/profile/Appoinment.jsx";
import loggingOut from "./components/profile/loggingOut.jsx";
import ListPatientComponent from "./components/profile/ListPatientComponent.jsx";


import AuthAPI from "./services/AuthAPI";

const authentication = {
  isAuthenticated: false,
  onAuthentication() {
    this.isAuthenticated = true;
  },
  getLogInStatus() {
    return this.isLoggedIn;
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Reg} />
            <Route path="/Feed" component={Feed} />
            <Route path="/listPatients" component={viewPatient} />
            <Route path="/getOption" component={choosingOption} />
            <Route path="/appoinm" component={viewAppoin} />
            <Route path="/newAddtion" component={addPatient} />
            <Route path = "/appoin-doctor/:id" component = {Appoinment}></Route>
            <Route path="/loggingOut" component={loggingOut} />
            <Route path = "/view-patient/:id" component = {ListPatientComponent}></Route>
            <Route path="/admin" component={admin} />
          </Switch>
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
          </Switch>
          <div>
            <Footer></Footer>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
