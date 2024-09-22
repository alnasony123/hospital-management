import React, { Component } from "react";
import PatientService from "./services/HospitalService";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
    };
  }

  viewPatient(id) {
    this.props.history.push(`/Feed/${id}`);
  }

  componentDidMount() {
    PatientService.getPatients().then((res) => {
      this.setState({ patients: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Patients List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addPatient}>
            {" "}
            Add Patient
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Patient Number</th>
                <th> Patient Name</th>
                <th> Patient Salary</th>
                <th> Patient Department Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient.id}>
                  <td> {patient.empno} </td>
                  <td> {patient.name} </td>
                  <td> {patient.sal}</td>
                  <td> {patient.deptid}</td>
                  <td>
                    <button className="btn btn-info">Update </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewPatient(patient.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
