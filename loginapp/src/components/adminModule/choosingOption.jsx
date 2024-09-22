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

  class choosingOption extends Component {
    constructor(props) {
        super(props)

        this.state = {
                  
        }

          
    }


    render() {
        
         return (
           <div>
            <h4>Please choose the option</h4>
                 <ul className="nav bg-light  nav-tabs">
                   <li className="nav-item" class="glyphicon glyphicon-log-out">
                     <Link to={"/listPatients"} className="nav-link text-secondary">
                       <h4> View Patients </h4>
                     </Link>
                   </li>
                 </ul>

                 <ul className="nav bg-light  nav-tabs">
                   <li className="nav-item" class="glyphicon glyphicon-log-out">
                     <Link to={"/newAddtion"} className="nav-link text-secondary">
                       <h4>New Registration</h4>
                     </Link>
                   </li>
                 </ul>
                 <ul className="nav bg-light  nav-tabs">
                   <li className="nav-item" class="glyphicon glyphicon-log-out">
                     <Link to={"/appoinm"} className="nav-link text-secondary">
                       <h4>Appoinment Details</h4>
                     </Link>
                   </li>
                 </ul>
               </div>
             
  ) }


  }
    export default choosingOption
                      
            