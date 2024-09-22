import React, { Component, useState } from "react";
import validator from "validator";
import Welcome from "../welcome/Welcome.jsx";
import HospitalService from "../../services/HospitalService";

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

class addPatient extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      age: 0,
      gender: "",
      address: "",
      phoneNumber: 0,
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.checkEmailValidity = this.checkEmailValidity.bind(this);
    this.register = this.register.bind(this);
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  checkEmailValidity = (event) => {
    this.setState({ email: event.target.value });
    if (validator.isEmail(event.target.value)) {
    } else {
      alert("Enter valid Email!");
    }
  };

  register(event) {
    // fetch("http://localhost:8080/api/v1/process_register", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name,
    //     age: this.state.age,
    //     gender: this.state.gender,
    //     address: this.state.address,
    //     phoneNumber: this.state.phoneNumber,
    //   }),
    // })
    //   .then((Response) => Response.json())
    //   .then((Result) => {
    //     if (Result.Status == "Success") {
    //       alert("great");
    //       this.props.history.push("/Feed");
    //     } else alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
    //   });

    event.preventDefault();
    let patient = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
    };
    console.log("patient => " + JSON.stringify(patient));

    HospitalService.createPatient(patient)
      .then((response) => {
        this.props.history.push("/listPatients");

        alert(" Your have successfully registered");
      })
      .catch((error) => {
        alert(" Please try again");
      });
  }

  render() {
    return (
      <div
        className="app flex-row align-items-center"
        style={{
          paddingTop: "0",
          boxSizing: "content-box",
        }}
      >
      
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.register}>
                    <h3>Register</h3>

                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        onBlur={this.checkEmailValidity}
                        placeholder="Enter Email Name"
                        //required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="password"
                        onChange={this.changePasswordHandler}
                        placeholder="Enter password"
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        onChange={this.changeNameHandler}
                        placeholder="Enter name"
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input
                        type="number"
                        onKeyPress={() => "return event.charCode >= 48"}
                        min="0"
                        max="150"
                        onChange={this.changeAgeHandler}
                        placeholder="Enter age"
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <select
                        value={this.state.value}
                        onChange={this.changeGenderHandler}
                      >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        required
                      </select>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input
                        type="text"
                        onChange={this.changeAddressHandler}
                        placeholder="Enter address"
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input
                        type="number"
                        onKeyPress={() => "return event.charCode >= 48"}
                        min="1000000000"
                        max="9999999999"
                        onChange={this.changePhoneNumberHandler}
                        placeholder="Enter phone No"
                      />
                    </InputGroup>
                    <Button type="submit" color="success" block>
                      Create Account
                    </Button>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default addPatient;
