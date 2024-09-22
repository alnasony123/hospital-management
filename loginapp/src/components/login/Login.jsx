import React, { Component } from "react";
import "../../App.css";
import Welcome from "../welcome/Welcome.jsx";
import HospitalService from "../../services/HospitalService";
import Cookies from "universal-cookie";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    event.preventDefault();
    let patient = {
      Email: this.state.Email,
      Password: this.state.Password,
    };
    console.log("patient => " + JSON.stringify(patient));

    HospitalService.getPatientById(patient.Email, patient.Password)

      .then((response) => {
        if (response) {
          this.props.history.push("/Feed");
          const cookies = new Cookies();
          cookies.set("email", JSON.stringify(patient.Email), { path: "/" });
          cookies.set("pwd", JSON.stringify(patient.Password), { path: "/" });
          alert(" Your have successfully logged");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(" Please try again");
      });
  }

  // login = (e) => {
  //   e.preventDefault();

  //   if (this.state.Email === "admin" && this.state.Password === "root") {
  //     this.props.history.push("./Feed");
  //   } else {
  //     alert("Wrong");
  //   }
  // };

  render() {
    return (
      <div
        className="app flex-row align-items-center"
        style={{
          paddingTop: "0",
          boxSizing: "content-box",
        }}
      >
        <Welcome />
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form>
                      <h3>Login</h3>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          onChange={this.Email}
                          placeholder="Enter Email"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <Input
                          type="password"
                          onChange={this.Password}
                          placeholder="Enter Password"
                        />
                      </InputGroup>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <Button onClick={this.login} color="success" block>
                        Login
                      </Button>
                    </Form>
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
