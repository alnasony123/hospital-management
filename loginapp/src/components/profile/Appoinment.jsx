import React, { Component } from "react";
import HospitalService from "../../services/HospitalService";
import Cookies from "universal-cookie";
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

class Appoinment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      doctorname: "",
      department: "",
      date: "",
      slot: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeDoctorNameHandler = this.changeDoctorNameHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeSlotHandler = this.changeSlotHandler.bind(this);

    this.doAppoinment = this.doAppoinment.bind(this);
  }
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeDoctorNameHandler = (event) => {
    this.setState({ doctorname: event.target.value });
  };
  changeDepartmentHandler = (event) => {
    this.setState({ department: event.target.value });
  };
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };
  changeSlotHandler = (event) => {
    this.setState({ slot: event.target.value });
  };

  doAppoinment(event) {
    event.preventDefault();
    const cookies = new Cookies();
    let appoinment = {
      name: this.state.name,
      email: cookies.get("email"),
      doctorname: this.state.doctorname,
      department: this.state.department,
      date: this.state.date,
      slot: this.state.slot,
    };
    console.log("appoinment => " + JSON.stringify(appoinment));

    HospitalService.processAppointment(appoinment)
      .then((response) => {
        this.props.history.push("/appointment");
        this.props.history.push("/loggingOut");
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
                  <Form onSubmit={this.doAppoinment}>
                    <h3>Booking The Slot</h3>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="Enter Patient Name"
                        onChange={this.changeNameHandler}
                      />
                    </InputGroup>

                    <InputGroup className="form-group">
                      <select
                        value={this.state.value}
                        onChange={this.changeDoctorNameHandler}
                      >
                        <option value="doc">Doctor</option>
                        <option value="AliBhai">Dr.AliBhai</option>
                        <option value="Sunny">Dr.Sunny</option>
                        <option value="Mangalasheri">Dr.Mangalasheri</option>
                        <option value="Chakochi">Dr.Aanakatil Chakochi</option>
                        <option value="Bilal">Dr.Bilal</option>
                        required
                      </select>
                    </InputGroup>
                    <InputGroup className="mb-3" class="dropdown-menu">
                      <Input
                        type="text"
                        placeholder=" Department"
                        onChange={this.changeDepartmentHandler}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input
                        type="date"
                        placeholder="Enter date"
                        onChange={this.changeDateHandler}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3" class="dropdown-menu">
                      <Input
                        type="text"
                        placeholder="slot"
                        onChange={this.changeSlotHandler}
                      />
                    </InputGroup>

                    <Button color="success" block>
                      Book Appoinment{" "}
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

export default Appoinment;
