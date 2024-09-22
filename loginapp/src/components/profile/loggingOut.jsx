import React, { Component } from "react";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    Row,
  } from "reactstrap";
  import Welcome from "../welcome/Welcome.jsx";
  import { Link } from "react-router-dom";

  class loggingOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
                  
        }

          
    }


    render() {
        // let patients = this.state.patient;
         return (
           <div>
            <p>Thank you for booking the slot Please sign out</p>
                 <ul className="nav bg-light  nav-tabs">
                   <li className="nav-item" class="glyphicon glyphicon-log-out">
                     <Link to={"/"} className="nav-link text-secondary">
                       <h4>Sign-Out</h4>
                     </Link>
                   </li>
                 </ul>
               </div>
             
  ) }


  }
    export default loggingOut
                      
            