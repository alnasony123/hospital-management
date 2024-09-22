import React, { Component } from "react";
import HospitalService from "../../services/HospitalService";



class ListPatientComponent extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            patient: {}
        }

    }
           
    componentDidMount() {
        HospitalService.getThemById(this.state.id).then((res) => {
            this.setState({patient: res.data});
        });
    }
            
          
     

    render() {
       //let patient = this.state.patients;
        return (
            <div>
                <br></br>
                <div class="card text-white bg-info mb-3" class="card text-center">
                    <h3>WELCOME</h3>
                    <div className = "card-body" >
                        
                        <div className = "row">
                            <label> Email :</label>
                            <div> { this.state.patient.email }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Name :</label>
                            <div> { this.state.patient.name }</div>
                        </div>
                        <div className = "row">
                            <label> Age  :</label>
                            <div> { this.state.patient.age }</div>
                        </div>
                        <div className = "row">
                            <label> Gender :</label>
                            <div> { this.state.patient.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Address :</label>
                            <div> { this.state.patient.address }</div>
                        </div>
                        <div className = "row">
                            <label> Phone Number :</label>
                            <div> { this.state.patient.phoneNumber }</div>
                        </div>
                        </div>

         </div>
         </div>
            
        );
    }
}

export default ListPatientComponent