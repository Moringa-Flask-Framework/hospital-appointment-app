import React from 'react'
import { useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';
import PatientTable from './PatientTable';

function PatientForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const [patientData, setPatientData] = useState({
    name: '',
    date_of_birth: '',
    age: 0,
    gender: '',
    contact_number: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'age' ? parseInt(value) : value;
    setPatientData({
      ...patientData,
      [name]: newValue,
    })
  }
console.log(patientData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data posted successfully:', data);
    } catch (error) {
      setError(error.message);
      console.error('Error posting data:', error);
    } finally {
      setLoading(false);
      window.location.reload()
    }
  };

  return (
    <div>
      <Container>
        <h3 className="text-center mt-3 mb-4">Patient Information Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formName">
                <Form.Control name="name" value={patientData.name} onChange={handleInputChange} type="text" placeholder="Name" /><br/>
              </Form.Group>
              <Form.Group controlId="formGender">
                <Form.Select name="gender" value={patientData.gender} onChange={handleInputChange} aria-label="Default select example">
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select><br/>
              </Form.Group>
              <Form.Group controlId='formAge'>
                <Form.Control name='age' value={patientData.age} onChange={handleInputChange} type='number' placeholder="Age" /><br/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Control name='date_of_birth' value={patientData.date_of_birth} onChange={handleInputChange} type='date' placeholder="Date of Birth" /><br/>
              <Form.Control name='contact_number' value={patientData.contact_number} onChange={handleInputChange} type='text' placeholder="Phone Number" /><br/>
              <Form.Control name='email' value={patientData.email} onChange={handleInputChange} type='email' placeholder="example@domain.com" />
            </Col>
          </Row>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Adding Patient...' : 'Add Patient'}
          </Button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </Form>
      </Container>
      <PatientTable/>
    </div>
  )
}

export default PatientForm