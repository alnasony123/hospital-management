import axios from "axios";

const HOSPITAL_API_BASE_URL = "http://localhost:8080/api/v1";

class HospitalService {
  listUsers() {
    return axios.get(HOSPITAL_API_BASE_URL + "/patients");
  }

  // getPatient() {
  //   return axios.get(HOSPITAL_API_BASE_URL);
  // }

  createPatient(patient) {
    return axios.post(HOSPITAL_API_BASE_URL + "/process_register", patient);
  }

  getPatientById(patientId, password) {
    return axios.post(
      HOSPITAL_API_BASE_URL +
        "/dologin?email=" +
        patientId +
        "&password=" +
        password
    );
  }
  getThemById(patient_id)
  {
    return axios.get(HOSPITAL_API_BASE_URL + "/patients?patient_id");

  }
  processAppointment(appoinment)
  {
    return axios.post(HOSPITAL_API_BASE_URL + "/appointment", appoinment);
  }
  getAdminById(userId, password) {
    return axios.get(
      HOSPITAL_API_BASE_URL +
        "/doadminlogin?userid=" +
        userId +
        "&password=" +
        password
    );
  }
  
  listUsers1() {
    return axios.get(HOSPITAL_API_BASE_URL + "/appointment");
  }

  updatePatient(patient, patientId) {
    return axios.put(HOSPITAL_API_BASE_URL + "/" + patientId, patient);
  }

  deletePatient(patientId) {
    return axios.delete(HOSPITAL_API_BASE_URL + "/" + patientId);
  }
  deleteAppointment(appointmentId) {
    return axios.delete(HOSPITAL_API_BASE_URL + "/" +appointmentId);
  }

}

export default new HospitalService();
