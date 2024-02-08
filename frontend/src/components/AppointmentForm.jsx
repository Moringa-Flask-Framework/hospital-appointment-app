import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function AppointmentForm() {

  const[loading, setLoading]= useState(false);
  const[error, setError]= useState(null);
  const [staffId, setStaffId] = useState("");
  const [patientId, setPatientId] = useState("");
  const[staffs, setStaffs]= useState([])
  const [patients, setPatients]= useState([])
  const [appointment_date, setAppoinmentDate]=useState('')
  const [appointment_type, setAppoinmentType]=useState('')

  
    useEffect(() => {
        fetch("/staffs")
            .then((r) => r.json())
            .then(setStaffs);
        }, []);

    useEffect(() => {
        fetch("/patients")
            .then((r) => r.json())
            .then(setPatients);
    }, []);


  const handleSubmit = async (e) =>{
      e.preventDefault();
      const formData = {
        staff_id: parseInt(staffId),
        patient_id :parseInt(patientId),
        appointment_date,
        appointment_type,
      };
    //   console.log(formData);
      const response = await fetch('/appointments', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(data=> {
      setLoading(false);
      })
      
      .catch(error => {
      setError(error);
      setLoading(false);
      })
      .finally(() => {
        window.location.reload()
      })
  }

  return (
    <div>
        <Container className='mb-5'>
            <h3 className="text-center mt-3 mb-4">Book Appointment</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control name='appointment_date' value={appointment_date} onChange={(e) => setAppoinmentDate(e.target.value)} type='date' placeholder="Appointment Date" /><br/>
                        <Form.Select name='appointment_type' value={appointment_type} onChange={(e) => setAppoinmentType(e.target.value)} aria-label="Default select example">
                            <option>Appointment type</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Er Medic">Er Medic </option>
                            <option value="Reception">Reception</option>
                            <option value="Head Doctor">Head Doctor</option>
                        </Form.Select><br/>
                    </Col>
                    <Col>
                        <Form.Select name='patient_id' value={patientId} onChange={(e) => setPatientId(e.target.value)} aria-label="Default select example">
                        <option value="">Select patient</option>
                            {patients.map((patient) => (
                            <option key={patient.id} value={patient.id}>
                                {patient.name}
                            </option>
                            ))}
                        </Form.Select><br/>    
                        <Form.Select name='staff_id' value={staffId} onChange={(e) => setStaffId(e.target.value)} aria-label="Default select example">
                        <option value="">Select staff</option>
                            {staffs.map((staff) => (
                            <option key={staff.id} value={staff.id}>
                                {staff.name}
                            </option>
                            ))}
                        </Form.Select><br/>   
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Book appointment
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default AppointmentForm