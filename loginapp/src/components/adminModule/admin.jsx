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

class admin extends Component {
  constructor() {
    super();

    this.state = {
      Userid: "",
      Password: "",
    };

    this.Password = this.Password.bind(this);
    this.Userid = this.Userid.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
  }

  Userid(event) {
    this.setState({ Userid: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  loginAdmin(event) {
    event.preventDefault();
    let admin = {
        Userid: this.state.Userid,
      Password: this.state.Password,
    };
    console.log("admin => " + JSON.stringify(admin));

    HospitalService.getAdminById(admin.Userid, admin.Password)

      .then((response) => {
        if (response) {
          this.props.history.push("/getOption");
          const cookies = new Cookies();
          cookies.set("userid", JSON.stringify(admin.Userid), { path: "/" });
          cookies.set("pwd", JSON.stringify(admin.Password), { path: "/" });
          alert(" Your have successfully logged in");
        }
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
        <Welcome />
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form>
                      <h3>Login As Admin</h3>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          onChange={this.Userid}
                          placeholder="Enter Userid"
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
                      <Button onClick={this.loginAdmin} color="success" block>
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

export default admin;
