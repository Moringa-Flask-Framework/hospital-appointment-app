import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function AppointmentForm() {

  const[loading, setLoading]= useState(false);
  const[error, setError]= useState(null);
  const [appointmentFormData, setappointmentFormData] = useState({
      appointment_date: '',
      patient_id: '',
      staff_id: '',     
    });

  const handleInputChange = (e) => {
      setappointmentFormData({
        ...appointmentFormData,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      // console.log("I am clicked");
      const response = await fetch('/appointments', {
          method: 'POST',
          body: JSON.stringify(signUpData),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }signUpData
      return response.json();
      })
      .then(data=> {
      setLoading(false);
      })
      .catch(error => {
      setError(error);
      setLoading(false);
      });
  }

  return (
    <div>
        <Container>
            <h3 className="text-center mt-3 mb-4">Create Appointment Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control value={appointmentFormData.appointment_date} onChange={handleInputChange} type='text' placeholder="Enter Appointment Date" /><br/>
                        <Form.Control value={appointmentFormData.patient_id} onChange={handleInputChange} type='number' placeholder="Enter patient id" /><br/>
                        <Form.Control value={appointmentFormData.staff_id} onChange={handleInputChange} type='number' placeholder="Enter staff id" /><br/>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Schedule new appointment
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default AppointmentForm