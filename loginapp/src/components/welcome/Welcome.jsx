import React, { Component } from "react";
import Header from "../../components/layout/Header.jsx";
import NavigatorMenu from "../../components/layout/NavigatorMenu.jsx";
import { Link } from "react-router-dom";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
            <nav>
              <NavigatorMenu />
            </nav>
          <div class="container-fluid" class="navbar-brand">
            <table class="table">
    <thead>
         <tr class="success"> 
              <td  class="glyphicon glyphicon-user" >
                <Link to={"/Login"} className="nav-link text-secondary">
                  <h4>Login</h4>
                </Link>
              </td>
              <td className="nav-item" class="glyphicon glyphicon-log-in">
                <Link to={"/Signup"} className="nav-link text-secondary">
                  <h4>Sign Up</h4>
                </Link>
              </td>
           
             <td className="nav-item" class="glyphicon glyphicon-log-in">
                <Link to={"/admin"}   className="nav-link text-secondary">
                  <h4>Login  as Admin</h4>
                </Link>
              </td>
          </tr>
    </thead>
    </table>
        <Header></Header>
        </div>
      </div>
    );
  }
}

export default Welcome;
