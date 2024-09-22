import React, { Component } from "react";
import Header from "../../components/layout/Header.jsx";
import NavigatorMenu from "../../components/layout/NavigatorMenu.jsx";
import { Link } from "react-router-dom";
import HospitalService from "../../services/HospitalService";


class viewAppoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      appointment: []
    }
   
   this.viewAppoinments=this.viewAppoinments.bind(this);
   //this.deletePatientsRecord=this.deletePatientsRecord.bind(this);
  }

  

  
 
viewAppoinments(id){
  this.props.history.push(`/appoin-doctor/${id}`);
}

componentDidMount() {
   
  HospitalService.listUsers1().then((res) => {
    this.setState({ appointment: res.data });
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
                <th> Doctor</th>
                <th> Department</th>
                <th> Date</th>
                <th> Slot</th>
				        <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.appointment.map((appoinm) => (
                <tr key={appoinm.id}>
                  <td> {appoinm.name} </td>
                  <td> {appoinm.email}</td>
                  <td> {appoinm.doctorname}</td>
                  <td> {appoinm.department}</td>
                  <td> {appoinm.date}</td>
                  <td> {appoinm.slot}</td>
                  <td>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={ () => this.deletePatientsRecord(appoinm.id)}
                      className="btn btn-primary"
                    >
                      Delete {" "}
                    </button>
                    <button
                      style={{ marginLeft: "50px" }}
                      onClick={ () => this.viewPatients(appoinm.id)}
                      className="btn btn-success"
                    >
                      Save New{" "}
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

export default viewAppoin;
