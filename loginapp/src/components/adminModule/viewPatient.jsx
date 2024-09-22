import React, { Component } from "react";
import Header from "../../components/layout/Header.jsx";
import NavigatorMenu from "../../components/layout/NavigatorMenu.jsx";
import { Link } from "react-router-dom";
import HospitalService from "../../services/HospitalService";


class viewPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      patients: []
    }
   
   this.viewPatients=this.viewPatients.bind(this);
  }
  deletePatientsRecord(id){
    HospitalService.deletePatient(id).then( res => {
        this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
    });
}
  
 
viewPatients(id){
  this.props.history.push(`/view-patient/${id}`);
}
componentDidMount() {
   
  HospitalService.listUsers().then((res) => {
    this.setState({ patients: res.data });
  });
}


  render() {
   // let patients = this.state.patient;
    return (
      <div>
        <Header></Header>
        <div className="row">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
               
                <th> Name</th> 
                <th> Email</th>
                <th> Phone Number</th>
				        <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient.id}>
                  <td> {patient.name} </td>
                  <td> {patient.email}</td>
                  <td> {patient.phoneNumber}</td>
                  <td>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={ () => this.deletePatientsRecord(patient.id)}
                      className="btn btn-primary"
                    >
                      Delete the Account{" "}
                    </button>
                    <button
                      style={{ marginLeft: "50px" }}
                      onClick={ () => this.viewPatients(patient.id)}
                      className="btn btn-success"
                    >
                      Appoinment{" "}
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

export default viewPatient;
