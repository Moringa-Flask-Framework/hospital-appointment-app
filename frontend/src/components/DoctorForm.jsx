import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Card,Container, Button} from 'react-bootstrap';

function DoctorForm() {
    const[loading, setLoading]= useState(false);
    const[error, setError]= useState(null);
    const [doctorData, setdoctorData] = useState({
        name: '',
        specialisation: '',
        start_date: '',        
        email: '',
        gender: '',
        contact_number: '',
        status: '',        
      });

    const handleInputChange = (e) => {
        setdoctorData({
          ...doctorData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log("I am clicked");
        const response = await fetch('/staffs', {
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
            <h3 className="text-center mt-3 mb-4">New Staff Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control value={doctorData.name} onChange={handleInputChange} type='text' placeholder="Name" /><br/>
                        <Form.Select value={doctorData.specialisation} onChange={handleInputChange} aria-label="Default select example">
                            <option>Specialisation</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Er Medic">Er Medic </option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Head Doctor">Head Doctor</option>
                        </Form.Select><br/>
                        <Form.Control value={doctorData.start_date} onChange={handleInputChange} type='text' placeholder="Starting Date" /><br/>
                        <Form.Control value={doctorData.email} onChange={handleInputChange} type='email' placeholder="example@domain.com" />
                    </Col>
                    <Col>
                        <Form.Select value={doctorData.gender} onChange={handleInputChange} aria-label="Default select example">
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select><br/>
                        <Form.Control value={doctorData.contact_number} onChange={handleInputChange} type='text' placeholder="Phone Number" /><br/>
                        <Form.Select value={doctorData.status} onChange={handleInputChange} aria-label="Default select example">
                            <option>Status</option>
                            <option value="Active">Male</option>
                            <option value="Inactive">Female</option>
                            <option value="On-leave">Female</option>
                        </Form.Select><br/>
                        
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add new Staff
                </Button>
            </Form>
        </Container>
        
    </div>
  )
}

export default DoctorForm