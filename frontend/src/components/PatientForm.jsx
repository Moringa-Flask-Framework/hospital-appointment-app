import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function PatientForm() {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [gender, setGender] = useState("Male");
    // const [date_of_birth, setDob]= useState('')
    // const [email, setEmail]= useState('')
    // const [contact_number, setPhone] = useState('')
    // const [message, setMessage] = useState("");\
    const[loading, setLoading]= useState(false);
    const[error, setError]= useState(null);
    const [patientData, setPatientData] = useState({
        name: '',
        age: '',
        gender: '',
        contact_number: '',
        email: '',
        date_of_birth: '',        
      });

    const handleInputChange = (e) => {
        setPatientData({
          ...patientData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log("I am clicked");
        const response = await fetch('/patients', {
            method: 'POST',
            body: JSON.stringify(patientData),
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
        });
    }
  return (
    <div>
        <Container>
            <h3 className="text-center mt-3 mb-4">Patient Information Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control value={patientData.name} onChange={handleInputChange} type='text' placeholder="Name" /><br/>
                        <Form.Select value={patientData.gender} onChange={handleInputChange} aria-label="Default select example">
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select><br/>
                        <Form.Control value={patientData.age} onChange={handleInputChange} type='number' placeholder="Age" /><br/>
                    </Col>
                    <Col>
                        <Form.Control value={patientData.date_of_birth} onChange={handleInputChange} type='date' placeholder="Date of Birth" /><br/>
                        <Form.Control value={patientData.contact_number} onChange={handleInputChange} type='text' placeholder="Phone Number" /><br/>
                        <Form.Control value={patientData.email} onChange={handleInputChange} type='email' placeholder="example@domain.com" />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add Patient
                </Button>
            </Form>
        </Container>
        
    </div>
  )
}

export default PatientForm